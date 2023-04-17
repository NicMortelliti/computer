import React, { useEffect, useState } from "react";
import { eyes } from "../../data/patterns";
import FaceRow from "./FaceRow";

const FaceAnimation = () => {
  const blinkDuration = 180; // half a second
  const minNonBlinkingTime = 3000; // 3 seconds
  const maxNonBlinkingTime = 12000; // 15 seconds
  const randomNonBlinkingDuration =
    Math.random() * (maxNonBlinkingTime - minNonBlinkingTime) +
    minNonBlinkingTime;
  const [eyesState, setEyesState] = useState("blank");

  useEffect(() => {
    const timer = setTimeout(
      () => {
        console.log(`Eyes set to ${eyesState}, ${randomNonBlinkingDuration}`);
        setEyesState(eyesState === "blank" ? "blink" : "blank");
      },
      eyesState === "blank" ? randomNonBlinkingDuration : blinkDuration
    );
    return () => clearTimeout(timer);
  }, [eyesState]);

  return (
    <div>
      {eyes[eyesState].map((row, index) => (
        <FaceRow key={index} rowOfPixelsArray={row} />
      ))}
    </div>
  );
};

export default FaceAnimation;
