import React from "react";
import { image } from "../image/image";
import { Navigatepage } from "../functtion/Navigatepage";
import { routes } from "../routes/routes";
const Header = () => {
  const navigateToAccessories = Navigatepage(routes.favorites);
  const navigateToMain = Navigatepage(routes.main);
  const navigateToBasket = Navigatepage(routes.basket);
  return (
    <div className="header">
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <img
          src={image.avatar}
          alt=""
          className="avatar"
          onClick={navigateToMain}
        />
        <div>REACT APPLE</div>
      </div>
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <div>Закладки</div>
        <img
          src={image.favorites}
          alt=""
          className="favorites"
          onClick={navigateToAccessories}
        />
      </div>
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <img
          src={image.basket}
          alt=""
          className="basket"
          onClick={navigateToBasket}
        />
      </div>
    </div>
  );
};

export default Header;
