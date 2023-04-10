import React from "react";
import GlobalStyles from "./styles/Global";
import Face from "./components/face/Face";
import PingPong from "./components/pingPong/PingPong";
import { Body } from "./styles/Body.style";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Body>
        <Body>
          <Face />
          <PingPong />
        </Body>
      </Body>
    </div>
  );
}

export default App;
