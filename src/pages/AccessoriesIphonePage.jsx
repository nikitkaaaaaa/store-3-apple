import React, { useEffect, useState } from "react";
import CardProduct from "../componets/cardProducts/CardProduct";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { filterproducts } from "../filterproducts/filterproducts";
import { useGetAccessoriesQuery } from "../api/accessories";
const AccessoriesIphonePage = () => {
  const { data = [] } = useGetAccessoriesQuery();
  const iPhone_accessories = data.slice(20, 42);
  const [search, setsearch] = useState("");
  const [choise, setchoise] = useState("rating");
  const [filterData, setfilterData] = useState([]);
  const style = {
    width: "50%",
    objectFit: "cover", // Заполнить контейнер, сохраняя соотношение сторон
    objectPosition: "center",
    border: "1px solid",
  };
  useEffect(() => {
    let filter = filterproducts(iPhone_accessories, search, choise);
    setfilterData(filter);
  }, [iPhone_accessories, search, choise]);
  return (
    <div>
      <h1 className="name_category">Аксессуары для iPhone</h1>
      <div className="filter_product">
        <Search onSearch={setsearch} />
        <Choise onChoise={setchoise} />
      </div>
    </div>
  );
};

export default AccessoriesIphonePage;
