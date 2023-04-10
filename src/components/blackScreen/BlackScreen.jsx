import React, { useEffect, useState } from "react";
import { BlackScreenCont, Circle } from "../../styles/BlackScreen.style";

const BlackScreen = () => {
  const [selectedCircleIndex, setSelectedCircleIndex] = useState(null);
  const numberOfCircles = 4;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedCircleIndex(Math.floor(Math.random() * numberOfCircles));
    }, Math.random() * 1500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BlackScreenCont>
      {Array.from({ length: numberOfCircles }).map((_, index) => (
        <Circle
          key={index}
          bgColor={index === selectedCircleIndex ? "red" : null}
        />
      ))}
    </BlackScreenCont>
  );
};

export default BlackScreen;
