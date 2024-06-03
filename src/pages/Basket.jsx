import React from "react";
import { useGetbasketQuery } from "../api/basket";
import LengthBasket from "../componets/cardProductsBasket/LengthBasket";
import ClearBasket from "../componets/cardProductsBasket/ClearBasket";
import CardProductsBasket from "../componets/cardProductsBasket/CardProductsBasket";
import { Navigatepage } from "../functtion/Navigatepage";
import { routes } from "../routes/routes";
import ModelBasket from "../componets/cardProductsBasket/ModelBasket";

const Basket = () => {
  const { data = [] } = useGetbasketQuery();
  const navigateToMain = Navigatepage(routes.main);
  return (
    <div style={{ display: "flex" }}>
      <div className="contenier_basket">
        <div style={{ paddingBottom: "20px" }}>
          <span onClick={navigateToMain} style={{ cursor: "pointer" }}>
            Главная
          </span>
          <img
            src="https://cdn-icons-png.flaticon.com/128/54/54833.png"
            alt=""
            style={{
              width: "10px",
              height: "10px",
              padding: "0px 10px",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "gray", cursor: "pointer" }}>Корзина</span>
        </div>
        <div
          style={{
            border: "1px solid purple",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LengthBasket />
          <ClearBasket />
        </div>
        <CardProductsBasket data={data} />
      </div>
      <ModelBasket />
    </div>
  );
};

export default Basket;
