"use client";

import { useEffect } from "react";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";

export function useHandPose(
  onGestureDetected: (gesture: "open" | "grab") => void
) {
  useEffect(() => {
    let model: handpose.HandPose;
    let video: HTMLVideoElement;
    let animationFrameId: number;

    const setupCamera = async () => {
      video = document.createElement("video");
      video.setAttribute("playsinline", "true");
      video.style.display = "none";
      document.body.appendChild(video);

      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      await video.play();
    };

    const detect = async () => {
      const predictions = await model.estimateHands(video);
      if (predictions.length > 0) {
        const landmarks = predictions[0].landmarks;

        const palm = landmarks[9];
        const tips = [8, 12, 16, 20].map((i) => landmarks[i]);

        const distances = tips.map((tip) =>
          Math.sqrt(
            Math.pow(tip[0] - palm[0], 2) + Math.pow(tip[1] - palm[1], 2)
          )
        );

        const averageDistance =
          distances.reduce((a, b) => a + b, 0) / distances.length;
        const gesture = averageDistance < 50 ? "grab" : "open";
        onGestureDetected(gesture);
      }

      animationFrameId = requestAnimationFrame(detect);
    };

    const run = async () => {
      await setupCamera();
      model = await handpose.load();
      detect();
    };

    run();

    return () => {
      if (video) {
        (video.srcObject as MediaStream | null)
          ?.getTracks()
          .forEach((track) => track.stop());
        video.remove();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [onGestureDetected]);
}
