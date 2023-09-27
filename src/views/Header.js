import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
  const [isLinksVisible, setLinksVisible] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!isLinksVisible);
  };

  return (
    <div>
      <div className="mobile-container">
        <div className="topnav">
          <a href="#home" className="active">
            地圖創作 丨 Maps
          </a>
          <div id="myLinks" style={{ display: isLinksVisible ? 'block' : 'none' }}>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={toggleLinks}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
