import React from "react";
import { image } from "../../image/image";
import Buttonproducts from "../cardProducts/Buttonproducts";
import { closeCartPopup } from "../../redux/checkCartPopup";
import { useDispatch } from "react-redux";
import ButtonGoToBasket from "./ButtonGoToBasket";

const CartPopup = ({ item, style }) => {
  const dispatch = useDispatch();
  const closecartpopup = () => {
    dispatch(closeCartPopup());
  };
  return (
    <div className="cartpopup">
      <img
        onClick={() => closecartpopup()}
        src={image.close}
        alt=""
        style={{
          width: "20px",
          height: "20px",
          alignSelf: "flex-end",
          paddingTop: "10px",
        }}
      />
      <h2 style={{ padding: "20px 0px 65px 0px" }}>Товар добавлен в корзину</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <img src={item.mainImage} alt="" style={style} />
          <div style={{ padding: "20px 0px 0px 20px" }}>{item.name}</div>
        </div>
        <h3>{item.price} ₽</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0px",
        }}
      >
        <Buttonproducts />
        <ButtonGoToBasket />
      </div>
    </div>
  );
};

export default CartPopup;
