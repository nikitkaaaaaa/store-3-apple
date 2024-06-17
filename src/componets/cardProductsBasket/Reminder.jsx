import React from "react";

const Reminder = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <div
        style={{
          color: "rgb(10,132,255)",
          padding: "15px 30px",
          background: "rgb(233,245,255)",
          display: "flex",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/12521/12521755.png"
          alt=""
          style={{ width: "20px", height: "20px", paddingRight: "10px" }}
        />
        Не откладывайте покупку
      </div>
    </div>
  );
};

export default Reminder;
