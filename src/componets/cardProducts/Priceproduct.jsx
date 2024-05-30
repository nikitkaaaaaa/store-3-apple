import React from "react";

const Priceproduct = ({ price }) => {
  return (
    <div>
      <div style={{ fontSize: "18px", paddingTop: "15px" }}>
        <b>{price} ₽</b>
      </div>
    </div>
  );
};

export default Priceproduct;
