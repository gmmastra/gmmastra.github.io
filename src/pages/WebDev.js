import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";
import { Box, Button, Tab, Tabs, Typography, Slide, Grow } from '@mui/material';
import { ArtGallery } from "../components/ArtGallery";

/* Navigation tabs */
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

/* Custom tabs */
const StyledTab = styled((props) => (
    <Tab disableRipple {...props} />
))(({ style }) => ({
    marginRight: '-10px',
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    border: "1px solid transparent",
    borderRadius: "0.25rem",
    color: 'var(--text-primary)',
    fontFamily: 'Cinzel, serif !important',
    transition: `color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out`,
    "&.Mui-selected": {
        color: 'var(--text-primary)',
        borderColor: 'var(--text-primary)',
    }
}));

// FSLI gallery links
const fsli = [
    {
        src: "https://i.imgur.com/5teaUaY.jpg",
        thumbnail: "https://i.imgur.com/5teaUaYl.png",
        width: 754,
        height: 681
    },
    {
        src: "https://i.imgur.com/L2RIJNS.png",
        thumbnail: "https://i.imgur.com/L2RIJNSl.png",
        width: 1311,
        height: 4191
    },
    {
        src: "https://i.imgur.com/a11skkg.png",
        thumbnail: "https://i.imgur.com/a11skkgl.png",
        width: 1312,
        height: 2896
    },
    {
        src: "https://i.imgur.com/hjRDu9n.png",
        thumbnail: "https://i.imgur.com/hjRDu9nl.png",
        width: 1269,
        height: 2469,
        caption: "Initial design document for the 'About/Program page"
    }]

// DataGenius gallery links
const datagenius = [
    {
        src: "https://i.imgur.com/NEPLvO3.png",
        thumbnail: "https://i.imgur.com/NEPLvO3l.png",
        width: 1235,
        height: 848,
        caption: "Desktop 'Profile' page"
    },
    {
        src: "https://i.imgur.com/l5uFcD5.png",
        thumbnail: "https://i.imgur.com/l5uFcD5l.png",
        width: 450,
        height: 950,
        caption: "Mobile 'Profile' page"
    },
    {
        src: "https://i.imgur.com/Bb2mTHp.png",
        thumbnail: "https://i.imgur.com/Bb2mTHpl.png",
        width: 786,
        height: 1332,
        caption: "Mobile 'Profile' page adding a Friend"
    },
    {
        src: "https://i.imgur.com/L28a2xC.png",
        thumbnail: "https://i.imgur.com/L28a2xCl.png",
        width: 1642,
        height: 1504,
        caption: "Mobile 'Upload' and 'Curate' pages"
    },
    {
        src: "https://i.imgur.com/11Rkyls.png",
        thumbnail: "https://i.imgur.com/11Rkylsl.png",
        width: 1266,
        height: 720,
        caption: "'Leaderboard' page"
    },
    {
        src: "https://i.imgur.com/uZ5b6WV.png",
        thumbnail: "https://i.imgur.com/uZ5b6WVl.png",
        width: 871,
        height: 1112,
        caption: "Wireframe progression of mobile 'Profile' page"
    }]

// EnviroAtlas gallery links
const enviroatlas = [
    {
        src: "https://i.imgur.com/Y3Uez5f.png",
        thumbnail: "https://i.imgur.com/Y3Uez5fl.png",
        width: 1300,
        height: 831
    },
    {
        src: "https://i.imgur.com/vw0WCz7.png",
        thumbnail: "https://i.imgur.com/vw0WCz7l.png",
        width: 1303,
        height: 837
    },
    {
        src: "https://i.imgur.com/rsNw8fJ.png",
        thumbnail: "https://i.imgur.com/rsNw8fJl.png",
        width: 1201,
        height: 772
    }]

// Pokedex gallery links
const pokedex = [
    {
        src: "https://i.imgur.com/f89G8rj.png",
        thumbnail: "https://i.imgur.com/f89G8rjl.png",
        width: 1108,
        height: 1001
    },
    {
        src: "https://i.imgur.com/wQFMJj6.png",
        thumbnail: "https://i.imgur.com/wQFMJj6l.png",
        width: 1492,
        height: 867
    },
    {
        src: "https://i.imgur.com/IaiBuWe.png",
        thumbnail: "https://i.imgur.com/IaiBuWel.png",
        width: 442,
        height: 873
    }]

export function WebDev(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const mediumViewport = useMediaQuery('(min-width:900px)');

    return (
        <div style={{ display: 'flex' }}>

            {/* Desktop Menu */}
            <Box class="sidebar">
                <Box sx={{ width: { xs: '95%', md: 'auto' }, display: 'flex', justifyContent: 'center' }}>
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                        <Tabs
                            orientation={mediumViewport ? "vertical" : "horizontal"}
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                            sx={{ borderRight: { xs: 0, md: 1 }, borderBottom: { xs: 1, md: 0 }, padding: { xs: '20px 0px 0px 0px', md: '50px 0px 0px 10px' }, height: { xs: 0, md: '80vh' } }}>
                            <StyledTab label="WORK & SCHOOL" {...a11yProps(0)} />
                            <StyledTab label="PERSONAL" {...a11yProps(1)} />
                        </Tabs>
                    </Slide>
                </Box>

                {/* Tab contents */}
                <Box sx={{ flexGrow: 1, height: '90vh', overflowY: 'auto', width: { xs: 'auto', md: '70vw' } }} >
                    <Box sx={{ height: '90vh', width: { xs: '100%', md: '100%' }, marginLeft: 'auto', marginRight: 'auto' }} >

                        {/* WORK & SCHOOL */}
                        <TabPanel value={value} index={0} class="theme-force sidebar-item">
                            <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                                <div>

                                    {/* FSLI */}
                                    <Box class="webdev-row">
                                        <img src="https://i.imgur.com/DYjcWsz.png" width="300px" alt="FSLI" style={{ objectFit: 'cover' }} />
                                        <Box sx={{ width: { xs: '70%', md: '50%' }, marginRight: '10%', textAlign: 'left' }}>
                                            <h1 className='subheading'>FSLI</h1>
                                            <p className='year'>2022</p>
                                            <span>
                                                The Food Systems Leadership Institute website was programmed using the Wordpress engine. I was in charge of updating
                                                the frontend according to design documents, working with HTML and CSS. Another responsibility was redesigning pages,
                                                creating my own design documents utilizing FIGMA wireframes and Adobe Photoshop. Each page underwent several rounds
                                                of iteration, with a focus on modernizing the site and optimizing existing pages for mobile use.
                                            </span>
                                            <br /><br />

                                            <Button class="game-button" href="https://fsli.org/" target="_blank">
                                                GO NOW
                                            </Button>
                                        </Box>
                                    </Box>
                                    <div style={{ margin: '0 auto 80px auto' }}>
                                        <ArtGallery images={fsli} width={220} height={220} caption={true} />
                                    </div>

                                    {/* DATAGENIUS */}
                                    <Box class="webdev-row">
                                        <Box sx={{ width: { xs: '70%', md: '50%' }, marginLeft: '10%', textAlign: 'right' }}>
                                            <h1 className='subheading'>SAS DATAGENIUS</h1>
                                            <p className='year'>2022</p>
                                            <span>
                                                DataGenius was a sponsored, semester-long project in it's second stage, done at North Carolina State University
                                                as part of my Senior Design class. The frontend was served via HTTPS as a progressive web application, programmed
                                                using REACT and the MaterialUI library. The backend was contained using DOCKER containers, and utilized the FLASK
                                                PYTHON module and SQLALCHEMY to communicate with the frontend and database. I was the frontend lead, responsible
                                                for creating wireframes and iteratively programming them, as well as testing my own and others' code through SELENIUM.
                                            </span>
                                        </Box>
                                        <img src="https://i.imgur.com/m0x9Yzf.png" width="300px" alt="DataGenius" />
                                    </Box>
                                    <Box sx={{ margin: '0 auto 80px auto' }}>
                                        <ArtGallery images={datagenius} width={220} height={220} caption={true} />
                                    </Box>

                                    {/* ENVIROATLAS */}
                                    <Box class="webdev-row">
                                        <img src="https://i.imgur.com/BcuDj9G.png" width="300px" alt="EnviroAtlas" style={{ objectFit: 'cover' }} />
                                        <Box sx={{ width: { xs: '70%', md: '50%' }, marginRight: '10%', textAlign: 'left' }}>
                                            <h1 className='subheading'>ENVIROATLAS</h1>
                                            <p className='year'>2022</p>
                                            <span>
                                                EnviroAtlas was a sponsored UI/UX project done at North Carolina State University as part of my Human-Computer
                                                Interactions course. The focus was on modernizing the sites UI, and I was responsible for creating interactive
                                                wireframes in FIGMA, as well as conducting several rounds of usability testing. Feedback was gathered after each
                                                round, and the final designs and gathered overall user experience was delivered to the project sponsors.
                                            </span>
                                            <br /><br />

                                            <Button class="game-button" href="http://bit.ly/3NHkYSk" target="_blank">
                                                SCENARIO 1
                                            </Button>
                                            <Button class="game-button" href="https://bit.ly/3pJ4ml1" target="_blank">
                                                SCENARIO 2
                                            </Button>
                                            <Button class="game-button" href="https://bit.ly/3XIklfD" target="_blank">
                                                SCENARIO 3
                                            </Button>
                                        </Box>
                                    </Box>
                                    <div style={{ margin: '0 auto 80px auto' }}>
                                        <ArtGallery images={enviroatlas} width={220} height={220} caption={true} />
                                    </div>

                                </div>
                            </Grow >
                        </TabPanel>

                        {/* PERSONAL */}
                        <TabPanel value={value} index={1} class="theme-force sidebar-item">
                            <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                                <div>
                                    {/* 8-BIT POKEDEX */}
                                    <Box class="webdev-row">
                                        <img src="https://i.imgur.com/0BD2jAM.png" width="300px" alt="pokedex" />
                                        <Box sx={{ width: { xs: '70%', md: '50%' }, marginRight: '10%', textAlign: 'left' }}>
                                            <h1 className='subheading'>8-BIT POKEDEX</h1>
                                            <p className='year'>2023</p>
                                            <span>
                                                The 8-BIT POKEDEX is an interactive database on
                                                <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank" rel="noreferrer" className="link"> POKEMON</a>.
                                                The site was created in REACT utilizing the MUI library, with a focus on responsive web design.
                                            </span>
                                            <br /><br />

                                            <Button class="game-button" href="https://gmastr.github.io/8-bit-pokedex/" target="_blank">
                                                GO NOW
                                            </Button>
                                        </Box>
                                    </Box>
                                    <div style={{ margin: '0 auto 80px auto' }}>
                                        <ArtGallery images={pokedex} width={220} height={220} caption={true} />
                                    </div>

                                </div>
                            </Grow >
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
        </div >
    );
}