import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
const Navigate = () => {
  return (
    <div>
      <div className="nav">
        <Link to={routes.mac} className="item_nav">Mac</Link>
        <Link to={routes.iphone}   className="item_nav">iPhone</Link>
        <Link to={routes.watch} className="item_nav">Watch</Link>
        <Link to={routes.ipad}   className="item_nav">iPad</Link>
      </div>
    </div>
  );
};

export default Navigate;
