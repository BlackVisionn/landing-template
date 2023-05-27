import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#features">featuresNavItemName</a>
          </li>
          <li>
            <a href="#about">aboutNavItemName</a>
          </li>
          <li>
            <a href="#services">servicesNavItemName</a>
          </li>
          <li>
            <a href="#portfolio">portfolioNavItemName</a>
          </li>
          <li>
            <a href="#team">teamNavItemName</a>
          </li>
          <li>
            <a href="#contact">contactNavItemName</a>
          </li>
        </ul>
      </nav>
      <div className="hero parallax">
        <h1 className="animated fadeIn">headerName</h1>
        <p className="animated fadeIn">headerDescription</p>
        <a href="#contact" className="btn interactive-button">
          buttonName
        </a>
      </div>
    </header>
  );
};

export default Header;
