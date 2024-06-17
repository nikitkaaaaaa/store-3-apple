import React, { useEffect, useState } from "react";
import CardProduct from "../componets/cardProducts/CardProduct";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { filterproducts } from "../filterproducts/filterproducts";
import { useGetAccessoriesQuery } from "../api/accessories";
const AccessoriesIpadPage = () => {
  const { data = [] } = useGetAccessoriesQuery();
  const iPad_accessories = data.slice(41, 64);
  const [search, setsearch] = useState("");
  const [choise, setchoise] = useState("rating");
  const [filterData, setfilterData] = useState([]);
  const style = {
    width: "100px",
    height: "130px",
    display: "flex",
    position: "relative",
  };
  useEffect(() => {
    let filter = filterproducts(iPad_accessories, search, choise);
    setfilterData(filter);
  }, [iPad_accessories, search, choise]);
  return (
    <div>
      <h1 className="name_category">Аксессуары для iPad</h1>
      <div className="filter_product">
        <Search onSearch={setsearch} />
        <Choise onChoise={setchoise} />
      </div>
      <CardProduct data={filterData} style={style} />
    </div>
  );
};

export default AccessoriesIpadPage;
