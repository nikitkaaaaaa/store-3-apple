import React, { useEffect, useState } from "react";
import CardProduct from "../componets/cardProducts/CardProduct";
import { filterproducts } from "../filterproducts/filterproducts";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { useGetWatchQuery } from "../api/watch";

const WatchPage = () => {
  const { data = [] } = useGetWatchQuery();
  const [search, setsearch] = useState("");
  const [choise, setchoise] = useState("rating");
  const [filterData, setfilterData] = useState([]);
  const style = {
    width: "150px",
    height: "170px",
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
      <h1 className="name_category">Watch</h1>
      <div className="filter_product">
        <Search onSearch={setsearch} />
        <Choise onChoise={setchoise} />
      </div>
      <CardProduct data={filterData} style={style} />
    </div>
  );
};
export default WatchPage;
