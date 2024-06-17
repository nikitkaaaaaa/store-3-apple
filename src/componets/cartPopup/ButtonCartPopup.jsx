import React from "react";
import { image } from "../../image/image";
import { useDispatch } from "react-redux";
import { openCartPopup } from "../../redux/checkCartPopup";
import { useAddbasketMutation } from "../../api/basket";
const ButtonCartPopup = ({ item, onClick }) => {
  const dispatch = useDispatch();
  const [addInBasket] = useAddbasketMutation();
  const openCartpopup = () => {
    addInBasket({
      name: item.name,
      price: item.price,
      mainImage: item.mainImage,
      rating: item.rating,
    });
    dispatch(openCartPopup());
    onClick();
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
        onClick={openCartpopup}
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

export default ButtonCartPopup;
