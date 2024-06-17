import React, { useEffect, useState } from "react";
import { filterproducts } from "../filterproducts/filterproducts";
import Search from "../componets/search/Search";
import Choise from "../componets/choise/Choise";
import { useGetFavoritesQuery } from "../api/favorites";
import CardProductFavorites from "../componets/cardProductsFavorites/cardProductsFavorites";
import EmptyFavoritres from "../componets/emptyProducts/EmptyFavoritres";

const Favorites = () => {
  const { data = [] } = useGetFavoritesQuery();
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
      <h1 className="name_category">Закладки</h1>
      {data.length >= 1 ? (
        <div>
          <div className="filter_product">
            <Search onSearch={setsearch} />
            <Choise onChoise={setchoise} />
          </div>
          <CardProductFavorites data={filterData} style={style} />
        </div>
      ) : (
        <EmptyFavoritres />
      )}
    </div>
  );
};

export default Favorites;
