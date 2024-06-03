import React from "react";
import ImageProductsBasket from "./ImageProductsBasket";
import NameProductBasket from "./NameProductBasket";
import PriceProductBasket from "./PriceProductBasket";
import DelteProductsBasket from "./DelteProductsBasket";
import Reminder from "./Reminder";
import FavoritesProduct from "../cardProducts/FavoritesProduct";

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FavoritesProduct />
            <DelteProductsBasket id={item.id} />
          </div>
        </div>
      ))}
      <Reminder />
    </div>
  );
};

export default CardProductsBasket;
