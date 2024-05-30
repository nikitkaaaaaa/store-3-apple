import React from "react";
import { useGetIphoneQuery } from "../api/iphone";
import CardProduct from "../componets/cardProducts/CardProduct";
import { useGetAccessoriesQuery } from "../api/accessories";
import { useGetIpadQuery } from "../api/ipad";
import { useGetMacQuery } from "../api/mac";
import { useGetWatchQuery } from "../api/watch";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";

const IphonePage = () => {
  const { data = [] } = useGetIphoneQuery();
  return (
    <div>
      <h1 className="name_product">iPhone</h1>
      <div className="filter_product">
        <Search />
        <Choise />
      </div>
      <CardProduct data={data} />
    </div>
  );
};

export default IphonePage;
