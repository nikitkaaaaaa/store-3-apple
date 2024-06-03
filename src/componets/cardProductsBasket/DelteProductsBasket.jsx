import React from "react";
import { image } from "../../image/image";
import { useRemoveToBasketMutation } from "../../api/basket";

const DelteProductsBasket = ({ id }) => {
  const [rempvetobasket] = useRemoveToBasketMutation();
  const deleteProduct = () => {
    rempvetobasket(id);
  };
  return (
    <img
      onClick={() => deleteProduct()}
      src={image.clear_basket}
      alt=""
      style={{ width: "20px", height: "20px" }}
    />
  );
};

export default DelteProductsBasket;
