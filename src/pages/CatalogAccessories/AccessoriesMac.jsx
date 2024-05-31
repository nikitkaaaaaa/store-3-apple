import React, { useEffect, useState } from 'react'
import CardProduct from '../componets/cardProducts/CardProduct'
import { filterproducts } from '../filterproducts/filterproducts';
import Search from '../componets/search/Search';
import Choise from '../componets/choise/Choise';
import { useGetAccessoriesQuery } from '../../api/accessories';


const AccessoriesMac = () => {
    const { data = [] } = useGetAccessoriesQuery();
    const [search,setsearch] = useState('');
    const [choise,setchoise] = useState('rating');
    const [filterData,setfilterData] = useState([]);
    useEffect(()=>{
      let filter = filterproducts(data,search,choise);
      setfilterData(filter);
    },[data,search,choise])
    return (
      <div>
        <h1 className="name_product">iPad</h1>
        <div className="filter_product">
          <Search onSearch = {setsearch}/>
          <Choise onChoise = {setchoise}/>
        </div>
        <CardProduct data={filterData} />
      </div>
    );
  };
export default AccessoriesMac
