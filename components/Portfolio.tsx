import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="parallax">
      <div className="overlay"></div>
      <h2 className="animated fadeIn">portfolioHeader</h2>
      <p className="animated fadeIn">portfolioDescription</p>
      <ul className="animated fadeIn">
        <li>
          firstPortoflioItemListProjectDescription{" "}
          <a href={"firstPortoflioItemListProjectUrl"}>
            "firstPortoflioItemListProjectName"
          </a>
        </li>
        <li>
          secondPortoflioItemListProjectDescription{" "}
          <a href={"secondPortoflioItemListProjectUrl"}>
            "secondPortoflioItemListProjectName"
          </a>
        </li>
        <li>
          thirdPortoflioItemListProjectDescription{" "}
          <a href={"thirdPortoflioItemListProjectUrl"}>
            "thirdPortoflioItemListProjectName"
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
