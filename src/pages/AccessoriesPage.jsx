import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
import { image } from "../image/image";
const AccessoriesPage = () => {
  return (
    <div>
      <h1 className="name_category">Аксессуары</h1>
      <div className="contenier_accessories">
        <div className="products_accessories">
          <img
            src={image.accessoriesmac}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <div>Для Mac</div>
        </div>
        <div className="products_accessories">
          <img
            src={image.accessoriesiphone}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <div>Для iPhone</div>
        </div>
        <div className="products_accessories">
          <img
            src={image.accessoriesipad}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <div>Для iPad</div>
        </div>
        <div className="products_accessories">
          <img
            src={image.accessorieswatch}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <div>Для Watch</div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
