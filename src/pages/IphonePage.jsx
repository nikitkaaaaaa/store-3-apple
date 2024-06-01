import React, { useEffect, useState } from "react";
import { useGetIphoneQuery } from "../api/iphone";
import CardProduct from "../componets/cardProducts/CardProduct";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { filterproducts } from "../filterproducts/filterproducts";
const IphonePage = () => {
  const { data = [] } = useGetIphoneQuery();
  const [search, setsearch] = useState("");
  const [choise, setchoise] = useState("rating");
  const [filterData, setfilterData] = useState([]);
  const style = {
    width: "110px",
    height: "130px",
    display: "flex",
    color: "red",
    position: "relative",
  };
  useEffect(() => {
    let filter = filterproducts(data, search, choise);
    setfilterData(filter);
  }, [data, search, choise]);
  return (
    <div>
      <h1 className="name_category">iPhone</h1>
      <div className="filter_product">
        <Search onSearch={setsearch} />
        <Choise onChoise={setchoise} />
      </div>
      <CardProduct data={filterData} style={style} />
    </div>
  );
};

export default IphonePage;
