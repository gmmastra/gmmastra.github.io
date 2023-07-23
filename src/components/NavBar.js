import React, { useEffect } from 'react';
import { AppBar, Box, Button, Divider, SwipeableDrawer } from '@mui/material';
import { Link } from "react-router-dom";
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
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
        const light = (props.theme === 'light' ? 'white' : '#141414');
        const dark = (props.theme === 'light' ? '#141414' : 'white');
        root.style.setProperty("--force-dark", dark);
        root.style.setProperty("--force-light", light);
    }, [props.theme, root.style]);

    // Inverts colors for elements that need to have colors force changed
    const colorChange = () => {
        const light = (props.theme === 'light' ? 'white' : '#141414');
        const dark = (props.theme === 'light' ? '#141414' : 'white');
        root.style.setProperty("--force-dark", light);
        root.style.setProperty("--force-light", dark);
    }

    const changeMode = () => {
        colorChange();
        props.switchTheme();
    }

    return (
        <div>
            <div className="border" />
            <AppBar position="fixed" className="body theme-force" elevation={0}>
                <Slide direction="down" in={true} timeout={500} mountOnEnter unmountOnExit>
                    <Box style={{ margin: '10px 30px 0 30px' }}>

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
                                <Box component={Link} to="/" sx={{ m: 1, textDecoration: 'none' }} className="theme-element link">
                                    <BubbleChartIcon style={{ width: '30px' }} />
                                </Box>
                                <Box component={Link} to="/artwork" sx={{ m: 1, textDecoration: 'none' }}>
                                    <span className="link">ARTWORK</span>
                                </Box>
                                <Box component={Link} to="/webdev" sx={{ m: 1, textDecoration: 'none' }}>
                                    <span className="link">WEB DEVELOPMENT</span>
                                </Box>
                                <Box component={Link} to="/gamedev" sx={{ m: 1, textDecoration: 'none' }}>
                                    <span className="link">GAME DEVELOPMENT</span>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {props.theme === 'light' && <DarkModeIcon onClick={changeMode} className="theme-element link" style={{ margin: '10px', cursor: 'pointer' }} />}
                                {props.theme === 'dark' && <LightModeIcon onClick={changeMode} className="theme-element link" style={{ margin: '10px', cursor: 'pointer' }} />}

                                <Box sx={{ m: 1 }}>
                                    <a href={resume} without rel="noopener noreferrer" target="_blank" className="link">
                                        <span className="link">RESUMÉ</span>
                                    </a>
                                </Box>
                                <Box component={Link} to="/contact" sx={{ m: 1, textDecoration: 'none' }}>
                                    <span className="link">CONTACT</span>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Slide>
            </AppBar>
            <div className="border-reverse" />
        </div>
    );
}