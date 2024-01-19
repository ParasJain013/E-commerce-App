import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
// import process
export default function FeaturedProducts({type}) {
  const {data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  
  return <div>
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ratione tempore aperiam ad beatae eligendi laborum esse omnis ullam eum, nam magnam cumque voluptatem quod obcaecati veritatis dolor sint! Impedit rerum illo officiis, similique nulla iure tenetur quibusdam eius corrupti quae, adipisci id maiores quis. Sit, provident. Officiis quos asperiores distinctio dolorem doloribus assumenda. Ad quam placeat quibusdam recusandae molestias?
            </p>
        </div>
        <div className="bottom">
            {loading?"loading":data.map(item=>(<Card item={item} key={item.id}/>))}
        </div>
        
    </div>
  </div>;
}
