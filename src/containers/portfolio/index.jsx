import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import "./styles.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };
  console.log(filterValue);

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio-content">
        <ul className="portfolio-content-filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio-content-cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoverIndex(key)}
              onMouseLeave={() => setHoverIndex(null)}
              key={key}
              className="portfolio-content-cards-items"
            >
              <div className="portfolio-content-cards-items-img-wrapper">
                {/* eslint-disable-next-line */}
                <a>
                  <img src={item.image} alt={item.projectNames} />
                </a>
              </div>
              <div className="portfolio-content-cards-items-overlay">
                {hoverIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        s
      </div>
    </section>
  );
};

export default Portfolio;
