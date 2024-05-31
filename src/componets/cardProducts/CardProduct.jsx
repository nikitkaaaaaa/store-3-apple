import React, { useState } from "react";
import Nameproduct from "./Nameproduct";
import Imageproduct from "./Imageproduct";
import Priceproduct from "./Priceproduct";
import Buttonproducts from "./Buttonproducts";
const CardProduct = ({ data, style }) => {
  return (
    <div className="coantenier_products">
      {data.map((item) => (
        <div className="products">
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
