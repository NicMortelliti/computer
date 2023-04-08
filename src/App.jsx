import React from "react";
import GlobalStyles from "./styles/Global";
import Face from "./components/face/Face";

import { blank } from "../src/data/patterns";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Face pattern={blank} />
    </div>
  );
}

export default App;
