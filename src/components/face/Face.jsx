import React from "react";
import FaceRow from "./FaceRow";
import FaceAnimation from "./FaceAnimation";
import { eyes, mouth } from "../../data/patterns";

const Face = () => {
  const eyesPattern = eyes.blank;
  const mouthPattern = mouth.blankOpen;

  return (
    <div>
      {eyesPattern.map((row, index) => (
        <FaceRow key={index} rowOfPixelsArray={row} />
      ))}
      {mouthPattern.map((row, index) => (
        <FaceRow key={index} rowOfPixelsArray={row} />
      ))}
    </div>
  );
};

export default Face;
