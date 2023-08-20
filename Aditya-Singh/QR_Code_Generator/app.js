let container = document.querySelector(".container");
let generateQR = document.querySelector(".form button");
let qrInput = document.querySelector(".form input");
let qrImg = document.querySelector(".qr_code img");

generateQR.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue){
        return;   // if input is empty then return from here
    }

    generateQR.innerText = "Generating QR Code...";

    // getting  QR Code of user entered value using qr-server
    // api and passing the  api returned img src to qrImg

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;


    qrImg.addEventListener("load", () =>{
        // once QR Code img loaded
        container.classList.add("active");
        generateQR.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        container.classList.remove("active");
    }
});