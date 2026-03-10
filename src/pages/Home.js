import React from 'react';
import { Box } from '@mui/material';
import { Grow, Slide } from '@mui/material';
import { ArtGallery } from "../components/ArtGallery";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorefrontIcon from '@mui/icons-material/Storefront';

export function Home(props) {

    const gallery =
        [{
            src: "https://i.imgur.com/PAaw48f.png",
            thumbnail: "https://i.imgur.com/PAaw48fl.png",
            width: 1567,
            height: 1004,
        },
        {
            src: "https://i.imgur.com/7f9bazP.jpeg",
            thumbnail: "https://i.imgur.com/7f9bazPl.jpeg",
            width: 3294,
            height: 2397,
        },
        {
            src: "https://i.imgur.com/00j9IHp.png",
            thumbnail: "https://i.imgur.com/00j9IHpl.png",
            width: 825,
            height: 613,
        },
        {
            src: "https://i.imgur.com/tN7VeVi.png",
            thumbnail: "https://i.imgur.com/tN7VeVil.png",
            width: 2519,
            height: 1286,
        },
        {
            src: "https://i.imgur.com/XcoR1Jy.gif",
            thumbnail: "https://i.imgur.com/XcoR1Jy.gif",
            width: 600,
            height: 363,
        },
        {
            src: "https://i.imgur.com/nyaWhYC.png",
            thumbnail: "https://i.imgur.com/z1zhnwj.png",
            width: 594,
            height: 1326,
        },
        {
            src: "https://i.imgur.com/cPrSM1R.jpeg",
            thumbnail: "https://i.imgur.com/cPrSM1Rm.jpeg",
            width: 2000,
            height: 2789,
        },
        {
            src: "https://i.imgur.com/66JmqtD.jpeg",
            thumbnail: "https://i.imgur.com/66JmqtDl.jpeg",
            width: 2625,
            height: 3375,
        },
        {
            src: "https://i.imgur.com/OwyA6uA.png",
            thumbnail: "https://i.imgur.com/OwyA6uAm.png",
            width: 3481,
            height: 2396,
        },
        {
            src: "https://i.imgur.com/Momqk4F.jpeg",
            thumbnail: "https://i.imgur.com/Momqk4Fl.jpeg",
            width: 1437,
            height: 3114,
        },
        {
            src: "https://i.imgur.com/030m31c.png",
            thumbnail: "https://i.imgur.com/030m31cm.png",
            width: 2220,
            height: 2220,
        },
        {
            src: "https://i.imgur.com/MEpEB5Y.png",
            thumbnail: "https://i.imgur.com/MEpEB5Yl.png",
            width: 691,
            height: 1563,
        },
        {
            src: "https://i.imgur.com/z9rxDhY.png",
            thumbnail: "https://i.imgur.com/z9rxDhYl.png",
            width: 2268,
            height: 1593,
        },
        {
            src: "https://i.imgur.com/X2K5osu.jpeg",
            thumbnail: "https://i.imgur.com/X2K5osul.jpeg",
            width: 2727,
            height: 3160,
        },
        {
            src: "https://i.imgur.com/UN0KPyE.png",
            thumbnail: "https://i.imgur.com/UN0KPyEl.png",
            width: 1238,
            height: 1805,
        },
        {
            src: "https://i.imgur.com/r9Tnzyy.jpeg",
            thumbnail: "https://i.imgur.com/r9Tnzyyl.jpeg",
            width: 1887,
            height: 2854,
        },]

    return (
        <div>
            <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Slide direction="down" in={true} timeout={600} mountOnEnter unmountOnExit>
                    <Box sx={{ mt: 5, width: '90%', fontSize: '9vw', textAlign: 'center' }} className="logo">
                        MAVERICK
                    </Box>
                </Slide>

                <Slide direction="down" in={true} timeout={600} mountOnEnter unmountOnExit>
                    <Box sx={{ mb: 1, mt: 1, textAlign: 'center', border: '1px solid', padding: { sm: '0px', md: '20px' }, width: 'fit-content' }}>
                        <span>I'm an artist, web developer, and enthusiastic hobbyist based in Raleigh, NC.</span>
                    </Box>
                </Slide>
            </Box>

            <Slide direction="down" in={true} timeout={600} mountOnEnter unmountOnExit>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <a className="link theme-element" href="https://github.com/gmmastra" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>
                    <a className="link theme-element" href="https://www.linkedin.com/in/gmmastra/" target="_blank" rel="noreferrer">
                        <LinkedInIcon style={{ padding: '0 10px' }} />
                    </a>
                    <a className="link theme-element" href="https://gmastr.itch.io/" target="_blank" rel="noreferrer">
                        <StorefrontIcon />
                    </a>
                </Box>
            </Slide>

            <Grow in={true} timeout={800} mountOnEnter unmountOnExit>
                <Box sx={{ mb: 4, ml: 'auto', mr: 'auto', border: '1px solid', width: { sm: '100%', md: '68vw' } }}>
                    <ArtGallery images={gallery} width={'15vw'} height={'15vw'} />
                </Box>
            </Grow>

        </div >
    );
}