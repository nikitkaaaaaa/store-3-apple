import React from "react";
import { image } from "../../image/image";

const Buttonproducts = () => {
  const basket = () => {
    alert("sdf");
  };
  return (
    <div
      style={{
        padding: "25px 0px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <button
        onClick={basket}
        style={{
          background: "white",
          color: "rgb(0, 88, 160)",
          padding: "10px 25px",
          borderRadius: "5px",
          border: "none",
          fontSize: "14px",
        }}
      >
        <span style={{ paddingRight: "10px" }}>В корзину</span>
        <img
          src={image.basket_arrow}
          alt=""
          style={{
            width: "12px",
            height: "12px",
            paddingLeft: "5px",
            verticalAlign: "middle",
          }}
        />
      </button>
    </div>
  );
};
export default Buttonproducts;
