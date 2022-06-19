import React, { useState } from 'react';
import '../Styles/NavBar.css';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import IconButton from '@mui/material/IconButton';
import Logo from '../assets/Images/Shakai - Logo.png';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {Bookmark} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

function NavBar() {

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
        };    

    return (
        <StyledEngineProvider injectFirst>
            <div className='nav-bar'>
                <Box sx={{ textAlign: 'center', pt: 1 }}>
                    <Button onClick={toggleDrawer(true)} sx={{ color:"black"}} className="nav-button">
                        <MenuOutlinedIcon sx={{ color:"white" , size: "5%"}}/>
                    </Button>
                </Box>
                <SwipeableDrawer
                    className='drawer'
                    anchor="left"
                    open={open}
                    BackdropProps={{ invisible: true }}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    elevation={0}
                    PaperProps={{
                        sx: { width: "5vw", minWidth:"50px", overflowX:"hidden",overflowY:"hidden" , backgroundColor: "#f5fcff"  },
                    }}

                >
                    <Box
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        className='nav-bar-box'
                    >
                        <div className='nav-logo'><img src={Logo} alt="Logo" className='nav-logo-img'/></div>
                        <div className='nav-subtitles'>
                            <Typography variant="overline" display="block" gutterBottom className='nav-sub-text'>KAI SUN</Typography>
                        </div>
                        <div className='nav-home'>
                            <Button onClick ={() =>navigate("/")} sx={{ color:"black" }}  activeclassname="active">
                                <HomeIcon sx={{ color:"black" }} fontSize ="large" className = "nav-icons"/>
                                <div className="nav-home-p">Home</div>
                            </Button>
                        </div>
                        <div className='nav-about'>
                            <Button onClick ={() =>navigate("/about")} sx={{ color:"black" }}  activeclassname="active">
                                <PersonIcon sx={{ color:"black" }} fontSize ="large" className = "nav-icons"/>
                            </Button>
                        </div>
                        <div className='nav-work'>
                            <Button onClick ={() =>navigate("/work")} sx={{ color:"black" }}  activeclassname="active">
                                <Bookmark sx={{ color:"black" }} fontSize ="large" className = "nav-icons"/>
                            </Button>
                        </div>
                        <div className='nav-contact'>
                            <Button onClick ={() =>navigate("/contact")} sx={{ color:"black" }}  activeclassname="active">
                                <EmailIcon sx={{ color:"black" }} fontSize ="large" className = "nav-icons"/>
                            </Button>
                        </div>
                    </Box>
                </SwipeableDrawer>
            </div>
        </StyledEngineProvider>
    )
}

export default NavBar