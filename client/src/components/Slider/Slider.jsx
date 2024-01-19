import React, { useState } from "react";
import { EastOutlined, West, WestOutlined } from "@mui/icons-material";
import './Slider.scss';
export default function Slider() {
  const [currentSlide,setCurrentSlide]=useState(0);
  const prevSlide=()=>{
    setCurrentSlide(currentSlide===0?2:(prev)=>prev-1);
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===2?0:(prev)=>prev+1);
  }

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto-compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/15936673/pexels-photo-15936673/free-photo-of-beautiful-young-woman-sitting-on-the-grass-with-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1627298855952-b75008bae685?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];
  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[4]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
}
