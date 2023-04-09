import React from "react";
import GlobalStyles from "./styles/Global";
import Face from "./components/face/Face";

import { face } from "../src/data/patterns";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Face pattern={face.blank} />
    </div>
  );
}

export default App;
