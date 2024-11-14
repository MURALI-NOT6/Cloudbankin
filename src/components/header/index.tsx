import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="headerRow">
          <div>
            <a href="/" className="logo">
              <h6 className="logoIcon">CB</h6>
              <p>CloudBankIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
