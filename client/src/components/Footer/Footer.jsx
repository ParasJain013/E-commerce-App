import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivala</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Store</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            facilis asperiores maxime sint quod nihil voluptatum, obcaecati
            incidunt tenetur rerum cupiditate
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
            assumenda illo blanditiis repudiandae suscipit labore aliquid
            adipisci. Quisquam iusto error consectetur.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ShopUp</span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="../../public/img/payment.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
