import React from "react";
import {Left} from "./Left";
import {Right} from "./Right";
import {Footer} from "./Footer";

function App() {
  return (
    <>
        <div className="container">
            <Left />
            <Right />
        </div>
      <Footer />
    </>
  );
}

export default App;
