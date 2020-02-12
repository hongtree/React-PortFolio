import React from "react";
import "./Contact.css";
import Github from "./logo/github-logo.svg";

const Contact = () => (
  <div className="Contact" id="c">
    <h1 className="Contact_hedding">CONTACT!</h1>
    <p className="Email"> Email : lhwan12@naver.com </p>
    <p className="Phone"> 010-5777-6284 </p>
    <a href="https://https://github.com/hongtree?tab=repositories">
      {" "}
      <img src={Github} alt="github" className="Github"></img>
    </a>
  </div>
);

export default Contact;
