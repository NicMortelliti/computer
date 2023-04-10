import React from "react";
import GlobalStyles from "./styles/Global";
import Face from "./components/face/Face";

import { eyes } from "../src/data/patterns";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Face />
    </div>
  );
}

export default App;
