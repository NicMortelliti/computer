import React from "react";
import GlobalStyles from "./styles/Global";
import Face from "./components/face/Face";
import PingPong from "./components/pingPong/PingPong";
import { Body } from "./styles/Body.style";
import BlueScreen from "./components/blueScreen/BlueScreen";
import BlackScreen from "./components/blackScreen/BlackScreen";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Body>
        <Body>
          <BlueScreen />
          <BlackScreen />
          <Face />
          <PingPong />
        </Body>
      </Body>
    </div>
  );
}

export default App;
