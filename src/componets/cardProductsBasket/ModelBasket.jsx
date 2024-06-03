import React from "react";
import { useGetbasketQuery } from "../../api/basket";

const ModelBasket = () => {
  const { data = [] } = useGetbasketQuery();
  const total_price_basket = data
    ? data.reduce((total, item) => total + item.price, 0)
    : 0;
  return (
    <div className="model_basket">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontSize: "24px" }}>Корзина</h1>
        <div style={{ color: "gray" }}>{data.length} товаров</div>
      </div>
      <div>Товаров ({data.length})</div>
      <div style={{ borderBottom: "1px solid gray" }}></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Сумма</div>
        <div>
          <b>{total_price_basket}</b> ₽
        </div>
      </div>
      <div style={{ margin: "auto" }}>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "15px 30px",
            color: "white",
            background: "rgb(0, 88, 160)",
            borderRadius: "30pc",
          }}
        >
          Оплатить корзину
        </button>
      </div>
    </div>
  );
};

export default ModelBasket;
