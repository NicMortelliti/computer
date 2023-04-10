import React from "react";
import {
  BarGraph,
  BarGraphPtr,
  BlueScreenCont,
} from "../../styles/BlueScreen.style";

const BlueScreen = () => {
  const RenderBarGraphs = () => {
    return (
      <>
        <BarGraph>
          <BarGraphPtr bgColor="green" />
        </BarGraph>
        <BarGraph>
          <BarGraphPtr bgColor="blue" />
        </BarGraph>
        <BarGraph>
          <BarGraphPtr bgColor="red" />
        </BarGraph>
      </>
    );
  };

  return (
    <BlueScreenCont>
      <RenderBarGraphs />
    </BlueScreenCont>
  );
};

export default BlueScreen;
