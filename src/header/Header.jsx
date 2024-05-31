import React from "react";
import { image } from "../image/image";


const Header = () => {
  return (
    <div className="header">
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <img src={image.avatar} alt="" className="avatar" />
        <div>REACT APPLE</div>
      </div>
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <div>Закладки</div>
        <img src={image.favorites} alt="" className="favorites" />
      </div>
      <div
        style={{
          border: "1px solid",
          display: "flex",
          alignItems: "center",
          width: "200px",
        }}
      >
        <img src={image.basket} alt="" className="basket" />
      </div>
    </div>
  );
};

export default Header;
