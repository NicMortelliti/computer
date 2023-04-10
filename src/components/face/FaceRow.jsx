import React from "react";
import { Row, Pixel } from "../../styles/Face.style";

const FaceRow = ({ rowOfPixelsArray }) => {
  return (
    <Row>
      {rowOfPixelsArray.map((pixel, index) => (
        // Using a transient prop to prevent rendering 'on' prop to DOM.
        // As a result, it prevents the warning "Received "true" for a non-boolean attribute"
        <Pixel key={index} $on={pixel} />
      ))}
    </Row>
  );
};

export default FaceRow;
