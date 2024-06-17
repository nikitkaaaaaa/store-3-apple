import React from "react";
import { image } from "../../image/image";
import { Navigatepage } from "../../functtion/Navigatepage";
import { routes } from "../../routes/routes";

const CategoryProducts = () => {
  const navigateToIphonePage = Navigatepage(routes.iphone);
  const navigateWatchPage = Navigatepage(routes.watch);
  const navigateIpadPage = Navigatepage(routes.ipad);
  const navigateMacPage = Navigatepage(routes.mac);
  return (
    <div>
      <div className="contenier_category_mainpage">
        <div
          className="products_category_mainpage"
          onClick={navigateToIphonePage}
        >
          <img
            src={image.category_iphone}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_main_page">от 55 990 ₽</h4>
        </div>
        <div className="products_category_mainpage" onClick={navigateIpadPage}>
          <img
            src={image.category_ipad}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_main_page">от 76 990 ₽</h4>
        </div>
        <div className="products_category_mainpage" onClick={navigateWatchPage}>
          <img
            src={image.category_watch}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_main_page">от 32 990 ₽</h4>
        </div>
        <div className="products_category_mainpage" onClick={navigateMacPage}>
          <img
            src={image.category_mac}
            alt=""
            style={{ width: "200px", height: "150px" }}
          />
          <h4 className="category_main_page">от 89 990 ₽</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
