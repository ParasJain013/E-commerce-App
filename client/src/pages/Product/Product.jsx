import React, { useState } from "react";
import "./Product.scss";
import { AddShoppingCart, Balance, FavoriteBorder } from "@mui/icons-material";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartReducer";
export default function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch=useDispatch()
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="leftProduct">
            <div className="images">
              {/* {console.log(data)} */}
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                srcset=""
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                srcset=""
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImage]?.data?.attributes?.url
                }
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div className="rightProduct">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>
              {data?.attributes?.desc}
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id:data.id,
              title:data.attributes.title,
              desc:data.attributes.desc,
              img:data.attributes.img.data.attributes.url,
              price: data.attributes.price,
              quantity:quantity
            }))}>
              <AddShoppingCart /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorder /> Add To Wish List
              </div>
              <div className="item">
                <Balance /> Compare
              </div>
            </div>
            <div className="info">
              <span>Vendor : Polo</span>
              <span>Product Type : T-Shirt</span>
              <span>Tag : T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQs</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
