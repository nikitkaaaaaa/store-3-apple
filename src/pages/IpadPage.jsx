import React, { useEffect, useState } from "react";
import CardProduct from "../componets/cardProducts/CardProduct";
import { filterproducts } from "../filterproducts/filterproducts";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { useGetIpadQuery } from "../api/ipad";

const IpadPage = () => {
  const { data = [] } = useGetIpadQuery();
  const [search, setsearch] = useState("");
  const [choise, setchoise] = useState("rating");
  const [filterData, setfilterData] = useState([]);
  const style = {
    width: "200px",
    height: "200px",
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
      <h1 className="name_category">iPad</h1>
      <div className="filter_product">
        <Search onSearch={setsearch} />
        <Choise onChoise={setchoise} />
      </div>
      <CardProduct data={filterData} style={style} />
    </div>
  );
};
export default IpadPage;
