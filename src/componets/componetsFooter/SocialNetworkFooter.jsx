import React from "react";
import { image } from "../../image/image";

const SocialNetworkFooter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        padding: "50px 0px",
        color: "white",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>REACT APPLE</div>
        <div>
          <img
            src={image.avatar}
            style={{ width: "35px", height: "35px", paddingLeft: "15px" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "125px",
        }}
      >
        <img
          src={image.instagramm}
          alt=""
          style={{ width: "30px", height: "30px" }}
        />
        <img src={image.vk} alt="" style={{ width: "30px", height: "30px" }} />
        <img
          src={image.facebook}
          alt=""
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default SocialNetworkFooter;
