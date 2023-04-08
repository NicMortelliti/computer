import React from "react";
import { Row, Pixel } from "../../styles/Face.style";

const FaceRow = () => {
  const RenderPixels = () => {
    return [...Array(9)].map((e, index) => {
      return <Pixel key={index} />;
    });
  };

  return (
    <Row>
      <RenderPixels />
    </Row>
  );
};

export default FaceRow;
