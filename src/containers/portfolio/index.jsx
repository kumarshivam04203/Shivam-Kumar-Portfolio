import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./portfolioData";
import './style.scss'
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  console.log(filterValue);

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);


  const showProject = (projectLink) => {
    window.open(projectLink, '_blank')
  };

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
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
        <div className="portfolio_content_cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio_content_cards_item"
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <Link to="" >
                  <img src={item.image} alt="" />
                </Link>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <button onClick={()=>showProject(item.projectLink)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;