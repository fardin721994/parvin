import { useState } from "react";
import "./App.css";
import Main from "./Main";
import Test from "./Test";
import Results from "./Results";
import Waiting from "./Waiting";
function App() {
  return (
    <div className="App">
      <Test />
      {/* <Results /> */}
      {/* <Waiting /> */}
    </div>
  );
}

export default App;
