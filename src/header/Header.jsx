import React from "react";
import { image } from "../image/image";
import { Navigatepage } from "../functtion/Navigatepage";
import { routes } from "../routes/routes";
import { useGetbasketQuery } from "../api/basket";
const Header = () => {
  const navigateToAccessories = Navigatepage(routes.favorites);
  const navigateToMain = Navigatepage(routes.main);
  const navigateToBasket = Navigatepage(routes.basket);
  const { data = [] } = useGetbasketQuery();
  return (
    <div className="header">
      <div
        style={{
          // border: "1px solid",
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
          // border: "1px solid",
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
          // border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <div style={{ border: "1px solid", position: "relative", zIndex: "1" }}>
          <img
            src={image.basket}
            alt=""
            className="basket"
            onClick={navigateToBasket}
          />
          {data.length >= 1 ? (
            <span
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                top: "-10px",
                right: "-10px",
                color: "white",
                borderRadius: "50%",
                zIndex: "2",
                display: "flex",
                textAlign: " center",
                alignItems: "center",
                background: "red",
                justifyContent: "center",
              }}
            >
              {data.length}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
