import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
const Navigate = () => {
  return (
    <div>
      <div className="">
        <Link to={routes.iphone}>iPhone</Link>
        <Link to={routes.ipad}>iPad</Link>
      </div>
    </div>
  );
};

export default Navigate;
