import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="parallax">
      <div className="overlay"></div>
      <h2 className="animated fadeIn">Портфолио</h2>
      <p className="animated fadeIn">
        Наше портфолио включает различные проекты, среди которых:
      </p>
      <ul className="animated fadeIn">
        <li>
          Интернет-магазин <a href={"https://ya.ru/"}>"Fashion Style"</a>
        </li>
        <li>
          Сайт о здоровом образе жизни{" "}
          <a href={"https://ya.ru/"}>"Healthy Living"</a>
        </li>
        <li>
          Лэндинг для туристической компании{" "}
          <a href={"https://ya.ru/"}>"Travel Explore"</a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
