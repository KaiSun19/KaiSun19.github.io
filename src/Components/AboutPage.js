import React, { useEffect, useState } from 'react';
import '../Styles/About.scss';
import AnimeLetters from './AnimeLetters';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Background from './Background';
import NavBar from './NavBar';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CameraIcon from '@mui/icons-material/Camera';

function AboutPage() {


    const [letterClass, setLetterClass] = useState("text-animate")

    useEffect(() => { // after all characters have loaded the classname of each character is set to the hover style
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 4000)
     }, [])


  return (
    <>

    <StyledEngineProvider injectFirst>
    <Background />
    <NavBar />

      <div className="container about-page">
        <div className="text-zone about-text-zone">
            <h1>
            <AnimeLetters
                letterClass={letterClass}
                letterArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
            />
            </h1>
            <p>
            I'm a UCL student studying Information Management for Business with a keen interest
            in how web technology and software is built through all sectors. I aspire to work on
            exciting projects that provide value, and some day create my own start up .
            </p>
            <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
            </p>
            <p>
            Aside from technology, I love to talk about entrepreneurship and innovation, 
            exploring the world and making meaningful memories with people. 
            </p>
        </div>

        <div className='stage-cube-cont'>

            <div className='cubespinner'>

                <div className='face1'>
                    <JavascriptIcon sx={{ color:"f0db4f"}} fontSize="100px"/>
                </div>
                <div className='face2'>
                    <HtmlIcon sx={{ color:"#e34c26"}} fontSize="100px"/>
                </div>
                <div className='face3'>
                    <CodeIcon sx={{ color:"black"}} fontSize="100px"/>
                </div>
                <div className='face4'>
                    <GitHubIcon sx={{ color:"black"}} fontSize="100px"/>
                </div>
                <div className='face5'>
                    <DesignServicesIcon sx={{ color:"black"}} fontSize="100px"/>
                </div>
                <div className='face6'>
                    <CameraIcon sx={{ color:"black"}} fontSize="100px"/>
                </div>

            </div>


        </div>

       </div>



       </StyledEngineProvider>

    </>
  )
}

export default AboutPage