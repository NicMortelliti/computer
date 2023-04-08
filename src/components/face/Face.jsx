import React from "react";
import FaceRow from "./FaceRow";

const Face = ({ pattern }) => {
  return (
    <div>
      {pattern.map((row, index) => (
        <FaceRow key={index} rowOfPixelsArray={row} />
      ))}
    </div>
  );
};

export default Face;
