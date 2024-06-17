import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Imageproduct from "../cardProducts/Imageproduct";
import Nameproduct from "../cardProducts/Nameproduct";
import Priceproduct from "../cardProducts/Priceproduct";
import Buttonproducts from "../cardProducts/Buttonproducts";
import DeleteProductFavorites from "./DeleteProductFavorites";
const CardProductFavorites = ({ data, style }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div className="coantenier_products" ref={parent}>
      {data.map((item) => (
        <div className="products" key={item.id}>
          <DeleteProductFavorites id={item.id} />
          <Imageproduct style={style} mainImage={item.mainImage} />
          <Nameproduct name={item.name} />
          <Priceproduct price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default CardProductFavorites;
