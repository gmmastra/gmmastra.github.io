import React, { useEffect } from 'react';
import { AppBar, Box, Button, Divider, SwipeableDrawer } from '@mui/material';
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import HomeIcon from '@mui/icons-material/Home';
import resume from '../assets/gmmastra_resume.pdf';

export function NavBar(props) {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => () => {
        setState(open);
    };

    var root = document.querySelector(":root");

    // Loads correct color from remembered mode
    useEffect(() => {
        document.body.classList.add('theme-force');
        const light = (props.theme === 'light' ? '#f2f3ea' : '#141414');
        const dark = (props.theme === 'light' ? '#141414' : '#f2f3ea');
        root.style.setProperty("--force-dark", dark);
        root.style.setProperty("--force-light", light);
    }, [props.theme, root.style]);

    // Inverts colors for elements that need to have colors force changed
    const colorChange = () => {
        const light = (props.theme === 'light' ? '#f2f3ea' : '#141414');
        const dark = (props.theme === 'light' ? '#141414' : '#f2f3ea');
        root.style.setProperty("--force-dark", light);
        root.style.setProperty("--force-light", dark);
    }

    const changeMode = () => {
        colorChange();
        props.switchTheme();
    }

    return (
        <div>
            <AppBar position="fixed" className="body theme-force" elevation={0}>
                <Slide direction="down" in={true} timeout={500} mountOnEnter unmountOnExit>
                    <Box className="nav-box">

                        {/* Mobile Menu */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <Button onClick={toggleDrawer(true)}><MenuIcon className="theme-element" /></Button>
                            <SwipeableDrawer open={state} onClose={toggleDrawer(false)} anchor="left" classes={{ paper: "theme-force drawer" }}>
                                <Button onClick={toggleDrawer(false)} component={Link} to="/" className="drawer-item">
                                    <span>HOME</span>
                                </Button>
                                <Button onClick={toggleDrawer(false)} component={Link} to="/artwork" className="drawer-item">
                                    <span>ARTWORK</span>
                                </Button>
                                <Button onClick={toggleDrawer(false)} component={Link} to="/webdev" className="drawer-item">
                                    <span>WEB DEVELOPMENT</span>
                                </Button>
                                <Button onClick={toggleDrawer(false)} component={Link} to="/gamedev" className="drawer-item">
                                    <span>GAME DEVELOPMENT</span>
                                </Button>
                                <Divider sx={{ m: 1 }} className="theme-force" />
                                <a href={resume} without rel="noopener noreferrer" target="_blank" className="link">
                                    <Button onClick={toggleDrawer(false)} className="drawer-item" style={{ textAlign: 'left' }}>
                                        <span>RESUMÉ</span>
                                    </Button>
                                </a>
                                <Button onClick={toggleDrawer(false)} component={Link} to="/contact" className="drawer-item">
                                    <span>CONTACT</span>
                                </Button>
                                <Box className="theme-force link" style={{ padding: '0 10px 110px 10px', cursor: 'pointer', marginTop: 'auto' }}>
                                    {props.theme === 'dark' && <LightModeIcon onClick={changeMode} />}
                                    {props.theme === 'light' && <DarkModeIcon onClick={changeMode} />}
                                </Box>
                            </SwipeableDrawer>
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box component={Link} to="/" sx={{ padding: '9px 0 6px 20px' }} className="theme-element nav-button">
                                    <HomeIcon style={{ width: '25px' }} />
                                </Box>
                                <ArrowForwardIcon style={{ width: '12px', marginBottom: '3px' }} />
                                <Box component={Link} to="/artwork" className="nav-button">
                                    <p>GRAPHICS</p>
                                </Box>
                                <Box component={Link} to="/webdev" className="nav-button">
                                    <p>WEB DEVELOPMENT</p>
                                </Box>
                                <Box component={Link} to="/gamedev" className="nav-button">
                                    <p>GAME DEVELOPMENT</p>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className="nav-button">
                                    <a href={resume} without rel="noopener noreferrer" target="_blank" className="link">
                                        <p>RESUMÉ</p>
                                    </a>
                                </Box>
                                <Box component={Link} to="/contact" className='nav-button'>
                                    <p>CONTACT</p>
                                </Box>
                                {props.theme === 'light' && <DarkModeIcon onClick={changeMode} className="theme-element link nav-item" style={{ margin: '10px', cursor: 'pointer', width: '20px' }} />}
                                {props.theme === 'dark' && <LightModeIcon onClick={changeMode} className="theme-element link nav-item" style={{ margin: '10px', cursor: 'pointer', width: '20px' }} />}
                            </Box>
                        </Box>

                    </Box>
                </Slide>
            </AppBar>
            <div className="border">
                <p>mastrandrea, maverick | 2025</p>
                </div>
        </div>
    );
}