import React from 'react';
import '../Styles/PortfolioWork.scss';

function PortfolioWork({imgLink, name, desc, containerSize}) {

    let linkToProject = "https://github.com/KaiSun19/" + name

  return (

    <div className="portfolio-container" style = {{width: containerSize}}>
            <div className="portfolio-content">
                <a href={linkToProject} target="_blank">
                    <div className="portfolio-content-overlay"></div>
                        <img className="portfolio-content-image" src={imgLink}/>
                        <div className="portfolio-content-details fadeIn-bottom">
                        <h3 className="portfolio-content-title">{name}</h3>
                        <p className="portfolio-content-text">{desc}</p>
                        </div>
                </a>
            </div>
        </div>
  )
}

export default PortfolioWork