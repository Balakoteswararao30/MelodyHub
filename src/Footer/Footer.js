import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="address">
      <div className="container-fuild">
        <div className="row pt-5">
          <div className="col-md-1"></div>
          <div className="col-md-4">
           <h4> About Musical</h4>
            <p>
              Lorem ipsum dolor sit amet test link adipiscing elit.Nullam
              diginissim convallis est.Quisque aliquam Donce faucibus. Nunc
              iacuils suscipit dui.
            </p>
          </div>
          <div className="col-md-2">
            <h4>Pages</h4>
            <a href="#">Home</a>
            <br/>
            <a href="#">About Us</a>
            <br/>
            <a href="#">Service</a>
            <br/>
            <a href="#">Contact</a>
          </div>
          <div className="col-md-3 usa">
            <h4>Address</h4>
            <p>123 ABC Ave Street View #456 XYZ</p>
            <p>New York City </p>
            <p>NY 10005,USA</p>
          </div>
          <div className="col-md-2">
            <h4>Get In Touch</h4>
            <i className="fa-brands fa-square-facebook"></i><span>facebook</span><br/>
            <i className="fa-brands fa-linkedin"></i><span>linkedin</span><br/>
            <i className="fa-brands fa-twitter"></i><span>twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
};
