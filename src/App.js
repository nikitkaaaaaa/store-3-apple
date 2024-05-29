import "./App.css";

import React from "react";
import Header from "./componets/header/Header";
import Navigate from "./componets/Navigate";

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
