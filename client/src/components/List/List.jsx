import "./List.scss";
import useFetch from "../../hooks/useFetch";
import React from "react";

import Card from "../Card/Card";
export default function List({ catId, maxPrice, sort,subCats }) {
  console.log(catId, maxPrice, sort,subCats)
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading?"loading":data.map((item) => (
        <Card item={item} key={item.id} />
        ))
      }
    </div>
  );
}
