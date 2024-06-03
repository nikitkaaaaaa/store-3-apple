import React from "react";
import { image } from "../../image/image";

const ClearBasket = () => {
  return (
    <div style={{ display: " flex", alignItems: "center" }}>
      <img
        src={image.clear_basket}
        alt=""
        style={{ width: "25px", height: "25px", paddingRight: "10px" }}
      />
      <div style={{ color: "gray" }}>Очистить все</div>
    </div>
  );
};

export default ClearBasket;
