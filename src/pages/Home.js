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
            thumbnail: "https://i.imgur.com/PAaw48fm.png",
            width: 1567,
            height: 1004,
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
            src: "https://i.imgur.com/IkMp4ES.jpeg",
            thumbnail: "https://i.imgur.com/IkMp4ESm.jpeg",
            width: 1849,
            height: 2525,
        },
        {
            src: "https://i.imgur.com/030m31c.png",
            thumbnail: "https://i.imgur.com/030m31cm.png",
            width: 2220,
            height: 2220,
        },
        {
            src: "https://i.imgur.com/Momqk4F.jpeg",
            thumbnail: "https://i.imgur.com/Momqk4Fm.jpeg",
            width: 1437,
            height: 3114,
        },
        {
            src: "https://i.imgur.com/A17m5lY.png",
            thumbnail: "https://i.imgur.com/A17m5lYm.png",
            width: 825,
            height: 613,

        },
        {
            src: "https://i.imgur.com/WwVC5PO.png",
            thumbnail: "https://i.imgur.com/WwVC5POm.png",
            width: 2421,
            height: 1398,
        },
        {
            src: "https://i.imgur.com/9Ion1Pt.png",
            thumbnail: "https://i.imgur.com/9Ion1Ptm.png",
            width: 1853,
            height: 2321,
        },
        {
            src: "https://i.imgur.com/tN7VeVi.png",
            thumbnail: "https://i.imgur.com/tN7VeVim.png",
            width: 2519,
            height: 1286,
        },
        {
            src: "https://i.imgur.com/MEpEB5Y.png",
            thumbnail: "https://i.imgur.com/MEpEB5Ym.png",
            width: 691,
            height: 1563,
        },
        {
            src: "https://i.imgur.com/0VWQOPE.png",
            thumbnail: "https://i.imgur.com/0VWQOPEm.png",
            width: 1508,
            height: 1921,
        },
        {
            src: "https://i.imgur.com/AGFz5hg.png",
            thumbnail: "https://i.imgur.com/AGFz5hgm.png",
            width: 2629,
            height: 1852,
        },
        {
            src: "https://i.imgur.com/UN0KPyE.png",
            thumbnail: "https://i.imgur.com/UN0KPyEm.png",
            width: 1238,
            height: 1805,
        },
        {
            src: "https://i.imgur.com/N6Ge5on.gif",
            thumbnail: "https://i.imgur.com/N6Ge5on.gif",
            width: 600,
            height: 365,
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
                    <Box sx={{ mb: 1, textAlign: 'center', border: '1px solid', padding: { sm: '0px', md: '20px' }, width: 'fit-content' }}>
                        <span>I'm an artist, web developer, and enthusiastic hobbyist based in Raleigh, NC.</span>
                    </Box>
                </Slide>
            </Box>

            <Slide direction="down" in={true} timeout={600} mountOnEnter unmountOnExit>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <a className="link" href="https://github.com/gmmastra" target="_blank" rel="noreferrer">
                        <GitHubIcon />
                    </a>
                    <a className="link" href="https://www.linkedin.com/in/gmmastra/" target="_blank" rel="noreferrer">
                        <LinkedInIcon style={{ padding: '0 10px' }} />
                    </a>
                    <a className="link" href="https://gmastr.itch.io/" target="_blank" rel="noreferrer">
                        <StorefrontIcon />
                    </a>
                </Box>
            </Slide>

            <Grow in={true} timeout={800} mountOnEnter unmountOnExit>
                <Box sx={{ mb: 4, ml: 'auto', mr: 'auto', border: '1px solid', width: '68vw' }}>
                    <ArtGallery images={gallery} width={'15vw'} height={'15vw'} />
                </Box>
            </Grow>

        </div >
    );
}