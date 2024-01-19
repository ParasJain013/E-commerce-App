import { DeleteOutlined } from "@mui/icons-material";
import React from "react";
import './Cart.scss';
import {loadStripe} from '@stripe/stripe-js';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../../Redux/cartReducer";
import { makeRequest } from "../../../makeRequest";
export default function Cart() {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.cart.products)
  const totalPrice=()=>{
    let total=0;
    products.forEach(item => {
      total+= item.quantity*item.price
      
    });
    return total.toFixed(2)
  }

  const stripePromise = loadStripe('pk_test_51OZzCBSF4GRWzZpRQVso4i3XFROZAUu9dxnfU4lZ7dpT50efjgMWCr1prNrymx20Pg4xaJTA9jdhZPpY3T1c56EW00TelZGLM1');
  const handlePayment=async ()=>{
    try{
      const stripe=await stripePromise;
      const res=await makeRequest.post("/orders",{
        products
      })
      await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
      })
    }
    catch(err){
      console.log(err)
    }

  }
  return (
    <div className="cart">
      <h1>Products in Your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img} alt="" srcset="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0,100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlined className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>Proceed To CheckOut</button>
      <span className="reset"  onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
}
