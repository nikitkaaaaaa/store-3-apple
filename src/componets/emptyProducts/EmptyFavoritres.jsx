import React from "react";
import { image } from "../../image/image";
import { Navigatepage } from "../../functtion/Navigatepage";
import { routes } from "../../routes/routes";
const EmptyFavoritres = () => {
  const goToHome = Navigatepage(routes.main);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={image.favorites}
          alt=""
          style={{
            width: "80px",
            height: "80px",
            paddingBottom: "10px",
          }}
        />
        <h3 style={{ textAlign: "center", paddingBottom: "20px" }}>
          Нет избранных товаров
        </h3>
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          Чтобы добавить товар в избранное, нажмите
          <br />
          на сердечко рядом с ним
        </div>
        <button
          onClick={goToHome}
          style={{
            cursor: "pointer",
            border: "none",
            padding: "15px 80px",
            color: "white",
            background: "rgb(0, 88, 160)",
            borderRadius: "30px",
          }}
        >
          Перейти в каталог
        </button>
      </div>
    </div>
  );
};

export default EmptyFavoritres;
