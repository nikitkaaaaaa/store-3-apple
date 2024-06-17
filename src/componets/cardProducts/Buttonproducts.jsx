import React from "react";
import { closeCartPopup } from "../../redux/checkCartPopup";
import { useDispatch } from "react-redux";

const Buttonproducts = () => {
  const dispatch = useDispatch();
  const addToBasket = () => {
    dispatch(closeCartPopup());
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
        onClick={addToBasket}
        style={{
          background: "rgb(0, 88, 160)",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          border: "1px solid",
          fontSize: "14px",
        }}
      >
        <span style={{ paddingRight: "10px" }}>Продолжить покупки</span>
      </button>
    </div>
  );
};
export default Buttonproducts;
