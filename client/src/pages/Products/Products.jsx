import React, { useState } from "react";
// import './Home.scss'
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId=parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000);
  // console.log(maxPrice)
  const [sort,setSort]=useState('asc')
  const [selectedSubCats,setSelectedSubCats]=useState([]);
  const handleChange=(e)=>{
    const value=e.target.value;
    const isChecked=e.target.checked;
    setSelectedSubCats(isChecked?[...selectedSubCats,value]:selectedSubCats.filter((item)=> item!==value))
  }
  const {data,loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  // console.log(data)
  return (
    <div className="products">
      <div className="left_products">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item=>(
            
          <div className="inputItem" key={item.id}>
            <input type="checkbox" name="" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="" id="" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e)=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e)=>setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right_products">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          srcset=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  );
};

export default Products;
