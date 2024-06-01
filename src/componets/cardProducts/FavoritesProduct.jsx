import React from "react";
import { image } from "../../image/image";

const FavoritesProduct = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: "10px 35px 22px 5px",
      }}
    >
      <img
        src={image.favorites}
        alt=""
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
};

export default FavoritesProduct;
