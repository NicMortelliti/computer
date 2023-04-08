import React from "react";
import { Row, Pixel } from "../../styles/Face.style";

const FaceRow = ({ rowOfPixelsArray }) => {
  const RenderPixels = () => {
    rowOfPixelsArray.map((pixel, index) => {
      console.log(pixel);
      return <Pixel key={index} on={pixel} />;
    });
  };

  return (
    <Row>
      {rowOfPixelsArray.map((pixel, index) => (
        <Pixel key={index} on={pixel} />
      ))}
    </Row>
  );
};

export default FaceRow;
