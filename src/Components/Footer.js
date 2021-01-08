import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <Link to="">Advertising</Link>
        <Link to="">Business</Link>
        <Link to="">Business</Link>
        <Link to="">About</Link>
        <Link to="">How Search works</Link>
      </div>
      <div className="footer__right">
        <Link to="">Privacy</Link>
        <Link to="">Terms</Link>
        <Link to="">Settings</Link>
      </div>
    </div>
  );
};

export default Footer;
