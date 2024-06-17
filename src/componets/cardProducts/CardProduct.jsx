import React, { useState } from "react";
import Nameproduct from "./Nameproduct";
import Imageproduct from "./Imageproduct";
import Priceproduct from "./Priceproduct";
import FavoritesProduct from "./FavoritesProduct";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CartPopup from "../cartPopup/CartPopup";
import { useSelector } from "react-redux";
import ButtonCartPopup from "../cartPopup/ButtonCartPopup";

const CardProduct = ({ data, style }) => {
  const [parent, enableAnimations] = useAutoAnimate();
  const [selectedItem, setSelectedItem] = useState(null);
  const checkCartPopup = useSelector(
    (state) => state.checkCartPopup.checkCartPopup
  );
  const openCartPopup = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="coantenier_products" ref={parent}>
      {data.map((item) => (
        <>
          <div className="products" key={item.id}>
            <FavoritesProduct item={item} />
            <Imageproduct style={style} mainImage={item.mainImage} />
            <Nameproduct name={item.name} />
            <Priceproduct price={item.price} />
            <ButtonCartPopup onClick={() => openCartPopup(item)} item={item} />
          </div>
        </>
      ))}
      <div>
        {checkCartPopup && <CartPopup item={selectedItem} style={style} />}
      </div>
    </div>
  );
};

export default CardProduct;
