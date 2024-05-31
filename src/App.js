import "./App.css";

import React from "react";

import Navigate from "./Navigate";
import Header from "./header/Header";
const App = () => {
  return (
    <div className="wrapper">
      <div className="contenier">
        <Header />
        <Navigate />
      </div>
    </div>
  );
};

export default App;
