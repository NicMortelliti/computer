import React from "react";
import { BlackScreenCont, Circle } from "../../styles/BlackScreen.style";

const BlackScreen = () => {
  return (
    <BlackScreenCont>
      <Circle bgColor="none" />
      <Circle bgColor="none" />
      <Circle bgColor="red" />
      <Circle bgColor="none" />
    </BlackScreenCont>
  );
};

export default BlackScreen;
