import React from "react";
import { image } from "../image/image";
import { Navigatepage } from "../functtion/Navigatepage";
import { routes } from "../routes/routes";
import { useGetbasketQuery } from "../api/basket";
import { useGetFavoritesQuery } from "../api/favorites";
const Header = () => {
  const navigateToFavorites = Navigatepage(routes.favorites);
  const navigateToMain = Navigatepage(routes.main);
  const navigateToBasket = Navigatepage(routes.basket);
  const { data: length_basket = [] } = useGetbasketQuery();
  const { data: length_favorites = [] } = useGetFavoritesQuery();
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
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

      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ position: "relative", zIndex: "1" }}
            onClick={navigateToFavorites}
          >
            <img src={image.favorites} alt="" className="favorites" />
            {length_favorites.length >= 1 ? (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  top: "-5px",
                  right: "25px",
                  color: "white",
                  borderRadius: "50%",
                  zIndex: "2",
                  display: "flex",
                  textAlign: " center",
                  alignItems: "center",
                  background: "red",
                  padding: "1px",
                  justifyContent: "center",
                }}
              >
                {length_favorites.length}
              </span>
            ) : null}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{ position: "relative", zIndex: "1" }}
            onClick={navigateToBasket}
          >
            <img src={image.basket} alt="" className="basket" />
            {length_basket.length >= 1 ? (
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  top: "-5px",
                  right: "-5px",
                  color: "white",
                  borderRadius: "50%",
                  zIndex: "2",
                  display: "flex",
                  textAlign: " center",
                  alignItems: "center",
                  background: "red",
                  padding: "1px",
                  justifyContent: "center",
                }}
              >
                {length_basket.length}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
