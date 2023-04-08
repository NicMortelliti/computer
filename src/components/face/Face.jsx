import React from "react";
import FaceRow from "./FaceRow";

const Face = () => {
  const RenderRows = () => {
    return [...Array(9)].map((e, index) => {
      return <FaceRow key={index} />;
    });
  };

  return (
    <div>
      <RenderRows />
    </div>
  );
};

export default Face;
