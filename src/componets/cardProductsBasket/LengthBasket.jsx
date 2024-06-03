import React from "react";
import { useGetbasketQuery } from "../../api/basket";

const LengthBasket = () => {
  const { data = [] } = useGetbasketQuery();
  return <h1 style={{ fontSize: "24px" }}>Корзина ({data.length})</h1>;
};

export default LengthBasket;
