import React, { useEffect, useState } from 'react'
import CardProduct from '../componets/cardProducts/CardProduct'
import { useGetMacQuery } from '../api/mac'
import { filterproducts } from '../filterproducts/filterproducts';
import Search from '../componets/search/Search';
import Choise from '../componets/choise/Choise';

const MacPage = () => {
    const { data = [] } = useGetMacQuery();
    const [search,setsearch] = useState('');
    const [choise,setchoise] = useState('rating');
    const [filterData,setfilterData] = useState([]);
    useEffect(()=>{
      let filter = filterproducts(data,search,choise);
      setfilterData(filter);
    },[data,search,choise])
    return (
      <div>
        <h1 className="name_product">Mac</h1>
        <div className="filter_product">
          <Search onSearch = {setsearch}/>
          <Choise onChoise = {setchoise}/>
        </div>
        <CardProduct data={filterData} />
      </div>
    );
  };
export default MacPage
