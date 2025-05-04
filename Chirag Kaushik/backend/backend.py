from flask import Flask, request, jsonify
from flask_cors import CORS
import pytesseract
from PIL import Image
import io
import cv2
import numpy as np
import base64
import re
from ultralytics import YOLO
import difflib  # ✅ For fuzzy matching

# Load your trained YOLO model
model = YOLO('best.pt')

# Tesseract path
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

app = Flask(__name__)
CORS(app, resources={r"/process": {"origins": "*"}}, supports_credentials=True)


# Simulated vehicle database
vehicle_db = {
    "MH20EE7602": {
        "owner": "Parveen Kumar",
        "car_model": "Skoda",
        "year": "2013",
        "status": "Active"
    },
    "DL7CO1939": {
        "owner": "Chirag Kaushik",
        "car_model": "Creta",
        "year": "2017",
        "status": "Stolen"
    },
    "MP33C3370": {
        "owner": "Shishti Gupta",
        "car_model": "Indigo",
        "year": "2016",
        "status": "Stolen"
    }
}

@app.route('/process', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided."}), 400
    

    file = request.files['image']
    image = Image.open(file.stream).convert('RGB')
    image_np = np.array(image)

    # YOLO Model Inference
    results = model.predict(image_np, conf=0.5)
    detections = results[0].boxes.xyxy.cpu().numpy()
    print("Detections:", detections)


    ocr_text = ""
    vehicle_info = {}

    if len(detections) > 0:
        x1, y1, x2, y2 = detections[0].astype(int)
        plate_image = image_np[y1:y2, x1:x2]

        pil_plate = Image.fromarray(plate_image)
        ocr_raw_text = pytesseract.image_to_string(pil_plate, config='--psm 7 -c tessedit_char_whitelist=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789').strip()

        # Clean OCR output
        ocr_text = re.sub(r'[^A-Z0-9]', '', ocr_raw_text.replace(' ', ''))

        # Fuzzy Matching for better accuracy
        plate_candidates = vehicle_db.keys()
        best_match = difflib.get_close_matches(ocr_text, plate_candidates, n=1, cutoff=0.6)

        if best_match:
            matched_plate = best_match[0]
            vehicle_info = vehicle_db[matched_plate]
            ocr_text = matched_plate  # Correct OCR text to matched plate

        # Response Paragraph
        if vehicle_info:
            paragraph = (
                f"The vehicle with registration number {ocr_text} is a {vehicle_info['car_model']} "
                f"model from the year {vehicle_info['year']}. It is owned by {vehicle_info['owner']}, "
                f"and the current status of the vehicle is {vehicle_info['status']}."
            )
        else:
            paragraph = f"No details were found for the registration number {ocr_text}."

        # Convert images to base64 for response
        plate_buffer = io.BytesIO()
        pil_plate.save(plate_buffer, format='JPEG')
        plate_buffer.seek(0)

        original_buffer = io.BytesIO()
        image.save(original_buffer, format='JPEG')
        original_buffer.seek(0)

        return jsonify({
            "plate_number": ocr_text,
            "vehicle_info": vehicle_info,  # ✅ Ensure correct JSON key
            "vehicle_info_paragraph": paragraph,
            "original_image": f"data:image/jpeg;base64,{base64.b64encode(original_buffer.read()).decode()}",
            "plate_image": f"data:image/jpeg;base64,{base64.b64encode(plate_buffer.read()).decode()}"
        })

    return jsonify({"error": "License plate not detected."}), 400

if __name__ == '__main__':
    app.run(debug=True)
