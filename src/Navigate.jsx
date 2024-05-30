import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import IphonePage from "./pages/IphonePage";
const Navigate = () => {
  return (
    <div>
      <div className="nav">
        <Link to={routes.mac} className="item_nav">
          Mac
        </Link>
        <Link to={routes.iphone} className="item_nav">
          iPhone
        </Link>
        <Link to={routes.watch} className="item_nav">
          Watch
        </Link>
        <Link to={routes.ipad} className="item_nav">
          iPad
        </Link>
        <Link to={routes.accessories} className="item_nav">
          Аксессуары
        </Link>
      </div>
      <Routes>
        <Route path={routes.iphone} element={<IphonePage />}></Route>
      </Routes>
    </div>
  );
};

export default Navigate;
