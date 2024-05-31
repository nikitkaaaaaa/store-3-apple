import React from "react";

const Imageproduct = ({ mainImage, secondImage, hovered, style }) => {
  return (
    <div style={style}>
      <img
        src={mainImage}
        alt=""
        className="firstImage product-image"
        style={{
          position: "absolute",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />
      <img
        src={secondImage}
        alt=""
        className="secondImage product-image"
        style={{
          position: "absolute",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
};

export default Imageproduct;
