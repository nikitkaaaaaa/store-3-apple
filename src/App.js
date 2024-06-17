import "./App.css";

import React from "react";

import Navigate from "./Navigate";
import Header from "./header/Header";
import Footer from "./pages/Footer";
import { useSelector } from "react-redux";
const App = () => {
  const checkCartPopup = useSelector(
    (state) => state.checkCartPopup.checkCartPopup
  );
  return (
    <div className={checkCartPopup ? "wrapperTrue" : "wrapperFasle"}>
      <div className="contenier">
        <Header />
      </div>
      <Navigate />
      <Footer />
      {checkCartPopup && <div className="overlay"></div>}
    </div>
  );
};

export default App;
