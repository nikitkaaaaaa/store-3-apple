import React from "react";
import { image } from "../image/image";
import { routes } from "../routes/routes";
import { Navigatepage } from "../functtion/Navigatepage";
const AccessoriesPage = () => {
  const navigateToIphonePage = Navigatepage(routes.accessoriesiphone);
  const navigateWatchPage = Navigatepage(routes.accessorieswatch);
  const navigateIpadPage = Navigatepage(routes.accessoriesipad);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <h1 className="name_category">Аксессуары</h1>
      <div className="contenier_accessories">
        <div className="products_accessories">
          <img
            src={image.accessoriesmac}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_accessories">Для Mac</h4>
        </div>
        <div className="products_accessories" onClick={navigateToIphonePage}>
          <img
            src={image.accessoriesiphone}
            alt=""
            style={{ width: "180px", height: "150px" }}
          />
          <h4 className="category_accessories">Для iPhone</h4>
        </div>
        <div className="products_accessories" onClick={navigateIpadPage}>
          <img
            src={image.accessoriesipad}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_accessories">Для iPad</h4>
        </div>
        <div className="products_accessories" onClick={navigateWatchPage}>
          <img
            src={image.accessorieswatch}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_accessories">Для Watch</h4>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesPage;
