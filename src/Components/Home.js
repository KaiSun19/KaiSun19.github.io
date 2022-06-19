import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import AnimeLetters from './AnimeLetters';
import AnimeLogo from './AnimeLogo';
import Background from './Background';
import '../Styles/Home.css';
import Typography from '@mui/material/Typography';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Loader from 'react-loaders';


function Home() {

    const [letterClass, setLetterClass] = useState("text-animate")

    const hi_array = ["H" , "i", ","]

    const im_array = ["I", "'", "m"]

    const kai_sun_array = ["K", "a", "i", " ", "S", "u", "n"]

    useEffect(() => { // after all characters have loaded the classname of each character is set to the hover style
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const navigate = useNavigate();




  return (
    
    <StyledEngineProvider injectFirst>
    <Background />
    <div className='home'>
        <NavBar/>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className='container home-page'>
              <div className='text-zone'>
                <AnimeLetters letterClass = {letterClass} letterArray = {hi_array} idx = {10} ></AnimeLetters>
                <div className='title-logo'>
                    <AnimeLetters letterClass = {letterClass} letterArray = {im_array} idx = {13} ></AnimeLetters>
                </div>
                <AnimeLetters letterClass = {letterClass} letterArray = {kai_sun_array} idx = {16} ></AnimeLetters>
                <span className="tags top-tags">
                     &lt;/h1&gt;
                </span>
                <Typography variant="h5" gutterBottom component="div"> Student | Frontend  Developer | UX Designer</Typography>
                <Button variant="outlined" className='work-button' size="large" sx={{ color: "black" }} 
                            onClick ={() =>navigate("/work")} >My Work</Button>
              </div>
          </div>

          {/* <AnimeLogo/> */}

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
    </div>

    <Loader type="ball-triangle-path" />

    

    </StyledEngineProvider>

  )
}

export default Home