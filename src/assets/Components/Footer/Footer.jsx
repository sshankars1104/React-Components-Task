import React from "react";
import "./Footer.css";
import "../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <ul className="navigation">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyRights">© Your Website 2023. All Rights Reserved.</p>
      </div>
      <div className="footerRight">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
      </div>
    </div>
  );
}

export default Footer;
