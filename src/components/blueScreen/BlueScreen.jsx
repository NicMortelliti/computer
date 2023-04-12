import React, { useEffect, useState } from "react";
import {
  BarGraph,
  BarGraphPtr,
  BlueScreenText,
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

  const RenderText = () => (
    <BlueScreenText>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi
      illo unde aut architecto reiciendis excepturi, blanditiis culpa iure!
      Dignissimos harum voluptatem vel quaerat sint in quae fugiat
      necessitatibus temporibus!
    </BlueScreenText>
  );

  return (
    <BlueScreenCont>
      {Array.from({ length: numberOfBars }).map((_, index) => (
        <BarGraph
          key={index}
          align={index === selectedBarIndex ? "end" : "start"}>
          <BarGraphPtr />
        </BarGraph>
      ))}
      <RenderText />
    </BlueScreenCont>
  );
};

export default BlueScreen;
