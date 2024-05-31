import React, { useState } from "react";
import Nameproduct from "./Nameproduct";
import Imageproduct from "./Imageproduct";
import Priceproduct from "./Priceproduct";
import Buttonproducts from "./Buttonproducts";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const CardProduct = ({ data }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [parent, enableAnimations] = useAutoAnimate()
  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };
  return (
    <div className="coantenier_products" ref={parent}>
      {data.map((item) => (
        <div
          className={`products ${hoveredCard === item.id ? "hovered" : ""}`}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          key={item.id}
        >
          <Imageproduct
            mainImage={
              hoveredCard === item.id ? item.secondImage : item.mainImage
            }
          />
          <Nameproduct name={item.name} />
          <Priceproduct price={item.price} />
         <Buttonproducts />
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
