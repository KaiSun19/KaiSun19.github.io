import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import React from 'react';
import '../Styles/Work.scss';
import Background from "./Background";
import NavBar from "./NavBar";
import { useData } from '../Context';
import PortfolioWork from "./PortfolioWork";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Work() {


  const {projectData} = useData()

  let portfolioSize = (window.innerWidth / 6) 
  portfolioSize = portfolioSize.toString()  + "px" ;

    return (

    <StyledEngineProvider injectFirst>
    <Background />

    <div className="work-page">
      <NavBar />

      <div className="portfolio-grid">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>

            {projectData.map( (project,i) =>{

              let gridClass = `grid-item-${i}`

              let imgLink = project.img_link
              if(imgLink === ""){
                imgLink = "https://raw.githubusercontent.com/KaiSun19/Misc/main/default_portfolio_background.png"
              }
              return (<Grid item className={gridClass}>
                    <PortfolioWork imgLink = {imgLink} name = {project.name} desc = {project.desc}  containerSize = {portfolioSize}  />
              </Grid>
              )
            })}

          </Grid>
        </Box>
      </div>
    </div>
    </StyledEngineProvider>

  )
}

export default Work