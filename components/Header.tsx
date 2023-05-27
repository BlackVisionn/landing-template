import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#features">Особенности</a>
          </li>
          <li>
            <a href="#about">О нас</a>
          </li>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#portfolio">Портфолио</a>
          </li>
          <li>
            <a href="#team">Команда</a>
          </li>
          <li>
            <a href="#contact">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className="hero parallax">
        <h1 className="animated fadeIn">Добро пожаловать на мой лендинг</h1>
        <p className="animated fadeIn">
          Здесь вы можете найти всю необходимую информацию о нашей компании или
          продукте.
        </p>
        <a href="#contact" className="btn interactive-button">
          Свяжитесь с нами
        </a>
      </div>
    </header>
  );
};

export default Header;
