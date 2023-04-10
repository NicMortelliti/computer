import React, { useEffect, useState } from "react";
import {
  BarGraph,
  BarGraphPtr,
  BlueScreenCont,
} from "../../styles/BlueScreen.style";

const BlueScreen = () => {
  const [selectedBarIndex, setSelectedBarIndex] = useState(null);
  const numberOfBars = 3;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedBarIndex(Math.floor(Math.random() * numberOfBars));
    }, Math.random() * 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <BlueScreenCont>
      {Array.from({ length: numberOfBars }).map((_, index) => (
        <BarGraph
          key={index}
          align={index === selectedBarIndex ? "end" : "start"}>
          <BarGraphPtr />
        </BarGraph>
      ))}
    </BlueScreenCont>
  );
};

export default BlueScreen;
