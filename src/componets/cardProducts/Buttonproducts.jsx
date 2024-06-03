import React from "react";
import { image } from "../../image/image";
import { useAddbasketMutation } from "../../api/basket";

const Buttonproducts = ({ item }) => {
  const [addInBasket] = useAddbasketMutation();
  const basket = () => {
    addInBasket({
      name: item.name,
      price: item.price,
      mainImage: item.mainImage,
      rating: item.rating,
    });
  };
  return (
    <div
      style={{
        padding: "25px 0px",
        display: "flex",
        margin: "0 auto",
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
          border: "1px solid",
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
