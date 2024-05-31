import React from "react";

const Choise = ({ onChoise }) => {
  const choiseProduct = (event) => {
    onChoise(event.target.value);
  }
  return (
    <div>
      <select
      onClick={choiseProduct}
        style={{
          border: "1px solid gray",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        <option value="rating">По рейтингу</option>
        <option value="smallprice">По убыванию цены</option>
        <option value="bigprice">По возрастанию цены </option>
      </select>
    </div>
  );
};

export default Choise;
