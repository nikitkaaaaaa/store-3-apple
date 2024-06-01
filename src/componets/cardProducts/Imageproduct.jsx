import React from "react";

const Imageproduct = ({ mainImage, secondImage, hovered, style }) => {
  return (
    <div style={style}>
      <img
        src={mainImage}
        alt="image"
        className="image_product"
      />
    </div>
  );
};

export default Imageproduct;
