import React, { useState } from "react";
import { image } from "../../image/image";

const FavoritesProduct = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: "0px 20px",
      }}
    >
      <img
        src={isHovered ? image.favorites_hover : image.favorites}
        alt=""
        style={{ width: "25px", height: "25px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default FavoritesProduct;
