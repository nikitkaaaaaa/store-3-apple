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
          background: "rgb(255, 29, 246)",
          color: "white",
          padding: "10px 25px",
          borderRadius: "5px",
          border: "none",
        }}
      >
        В корзину
      </button>
    </div>
  );
};

export default Buttonproducts;
