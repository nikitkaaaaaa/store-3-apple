import React, { useState } from "react";
import Nameproduct from "./Nameproduct";
import Imageproduct from "./Imageproduct";
import Priceproduct from "./Priceproduct";
import Buttonproducts from "./Buttonproducts";
import FavoritesProduct from "./FavoritesProduct";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const CardProduct = ({ data, style }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div className="coantenier_products" ref={parent}>
      {data.map((item) => (
        <div className="products">
          <FavoritesProduct />
          <Imageproduct style={style} mainImage={item.mainImage} />
          <Nameproduct name={item.name} />
          <Priceproduct price={item.price} />
          <Buttonproducts />
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
