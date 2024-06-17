import React from "react";
import ImageProductsBasket from "./ImageProductsBasket";
import NameProductBasket from "./NameProductBasket";
import PriceProductBasket from "./PriceProductBasket";
import DelteProductsBasket from "./DelteProductsBasket";
import Reminder from "./Reminder";
import FavoritesProduct from "../cardProducts/FavoritesProduct";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const CardProductsBasket = ({ data }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);
  return (
    <div ref={parent}>
      {data.map((item) => (
        <div className="products_basket" key={item.id}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
            <FavoritesProduct item={item} />
            <DelteProductsBasket id={item.id} />
          </div>
        </div>
      ))}
      <Reminder />
    </div>
  );
};

export default CardProductsBasket;
