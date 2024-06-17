import React from "react";
import { useDispatch } from "react-redux";
import { closeCartPopup } from "../../redux/checkCartPopup";
import { Navigatepage } from "../../functtion/Navigatepage";
import { routes } from "../../routes/routes";
const ButtonGoToBasket = () => {
  const navigateBasket = Navigatepage(routes.basket);
  const dispatch = useDispatch();
  const goToBasket = () => {
    dispatch(closeCartPopup());
    navigateBasket();
  };
  return (
    <div>
      <button
        onClick={goToBasket}
        style={{
          background: "rgb(0, 88, 160)",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          border: "1px solid",
          fontSize: "14px",
        }}
      >
        <span style={{ paddingRight: "10px" }}>Перейти в корзину</span>
      </button>
    </div>
  );
};

export default ButtonGoToBasket;
