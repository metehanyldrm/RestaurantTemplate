import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And Never Miss Latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your E-mail Adress"/>
      <button className="custom__button">SubsCribe</button>
    </div>
  </div>
);

export default Newsletter;
