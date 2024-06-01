import React from "react";

const Buttonproducts = () => {
  const basket = () => {
    alert("sdf");
  };
  return (
    <div style={{ padding: "25px 0px" }}>
      <button
        onClick={basket}
        style={{
          background: "white",
          color: "rgb(0, 88, 160)",
          padding: "10px 25px",
          borderRadius: "5px",
          border: "none",
          fontSize : '14px'
        }}
      >
        В корзину
      </button>
    </div>
  );
};

export default Buttonproducts;
