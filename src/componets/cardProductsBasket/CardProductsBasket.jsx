import React from "react";
import ImageProductsBasket from "./ImageProductsBasket";
import NameProductBasket from "./NameProductBasket";
import PriceProductBasket from "./PriceProductBasket";
import DelteProductsBasket from "./DelteProductsBasket";
import Reminder from "./Reminder";

const CardProductsBasket = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="products_basket" key={item.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ImageProductsBasket image={item.mainImage} />
            <NameProductBasket name={item.name} />
          </div>
          <PriceProductBasket price={item.price} />
          <DelteProductsBasket />
        </div>
      ))}
      <Reminder />
    </div>
  );
};

export default CardProductsBasket;
