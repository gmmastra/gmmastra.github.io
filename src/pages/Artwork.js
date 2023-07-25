import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";
import { Box, Tab, Tabs, Typography, Divider, Slide, Grow } from '@mui/material';
import { ArtGallery } from "../components/ArtGallery";
import ImageGallery from 'react-image-gallery';

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

const gallery =
    [{
        src: "https://i.imgur.com/kqF2bol.png",
        thumbnail: "https://i.imgur.com/kqF2bolm.png",
        width: 1157,
        height: 1134,
    },
    {
        src: "https://i.imgur.com/WQVzUIA.jpg",
        thumbnail: "https://i.imgur.com/WQVzUIAm.jpg",
        width: 2000,
        height: 2000,
    },
    {
        src: "https://i.imgur.com/FyHAz0T.png",
        thumbnail: "https://i.imgur.com/FyHAz0Tm.png",
        width: 1180,
        height: 1494,
    },
    {
        src: "https://i.imgur.com/ptTJezV.png",
        thumbnail: "https://i.imgur.com/ptTJezVm.png",
        width: 1264,
        height: 1792,
    },
    {
        src: "https://i.imgur.com/qc2kxz4.jpg",
        thumbnail: "https://i.imgur.com/qc2kxz4m.jpg",
        width: 2272,
        height: 1278,
    },
    {
        src: "https://i.imgur.com/8czOc7k.jpg",
        thumbnail: "https://i.imgur.com/8czOc7k.jpg",
        width: 1664,
        height: 2259,
    },
    {
        src: "https://i.imgur.com/a5OQA1M.png",
        thumbnail: "https://i.imgur.com/a5OQA1Mm.png",
        width: 1508,
        height: 1921,

    },
    {
        src: "https://i.imgur.com/1yrbj6f.jpg",
        thumbnail: "https://i.imgur.com/1yrbj6fl.jpg",
        width: 1437,
        height: 3114,
    },
    {
        src: "https://i.imgur.com/3UcMZHM.png",
        thumbnail: "https://i.imgur.com/3UcMZHMm.png",
        width: 1617,
        height: 2078,
    },
    {
        src: "https://i.imgur.com/vflmKpK.jpg",
        thumbnail: "https://i.imgur.com/vflmKpKm.jpg",
        width: 4242,
        height: 3787,
    },
    {
        src: "https://i.imgur.com/T9TVq9Q.jpg",
        thumbnail: "https://i.imgur.com/T9TVq9Qm.jpg",
        width: 1332,
        height: 1290,
    },
    {
        src: "https://i.imgur.com/YGZp7u0.jpg",
        thumbnail: "https://i.imgur.com/YGZp7u0l.jpg",
        width: 562,
        height: 1615,
    },
    {
        src: "https://i.imgur.com/nwr089M.jpg",
        thumbnail: "https://i.imgur.com/nwr089Mm.jpg",
        width: 1500,
        height: 2297,
    },
    {
        src: "https://i.imgur.com/XmpIKUy.jpg",
        thumbnail: "https://i.imgur.com/XmpIKUym.jpg",
        width: 2109,
        height: 3207,
    },
    {
        src: "https://i.imgur.com/stoNWX9.jpg",
        thumbnail: "https://i.imgur.com/stoNWX9m.jpg",
        width: 3864,
        height: 4264,
    },
    {
        src: "https://i.imgur.com/PDWfzG0.jpg",
        thumbnail: "https://i.imgur.com/PDWfzG0m.jpg",
        width: 1231,
        height: 1264,
    },
    {
        src: "https://i.imgur.com/dD79gi2.png",
        thumbnail: "https://i.imgur.com/dD79gi2m.png",
        width: 2392,
        height: 1840,
    },
    {
        src: "https://i.imgur.com/ACTYZqI.jpg",
        thumbnail: "https://i.imgur.com/ACTYZqIm.jpg",
        width: 894,
        height: 1080,
    },
    {
        src: "https://i.imgur.com/b5AFuqc.jpg",
        thumbnail: "https://i.imgur.com/b5AFuqcm.jpg",
        width: 2266,
        height: 3432,
    },
    {
        src: "https://i.imgur.com/orokj7y.jpg",
        thumbnail: "https://i.imgur.com/orokj7ym.jpg",
        width: 2173,
        height: 2138,
    }]

const esjCovers = [
    {
        original: 'https://i.imgur.com/HnCt4Qu.jpg',
        thumbnail: 'https://i.imgur.com/HnCt4Qu.jpg',
    },
    {
        original: 'https://i.imgur.com/d7zPRb4.jpg',
        thumbnail: 'https://i.imgur.com/d7zPRb4.jpg',
    },
    {
        original: 'https://i.imgur.com/79zhj2Y.jpg',
        thumbnail: 'https://i.imgur.com/79zhj2Y.jpg',
    },
    {
        original: 'https://i.imgur.com/a6F21TU.jpg',
        thumbnail: 'https://i.imgur.com/a6F21TU.jpg',
    }]

const esj = [{
    src: "https://i.imgur.com/OxuyI2V.jpg",
    thumbnail: "https://i.imgur.com/OxuyI2Vm.jpg",
    width: 2615,
    height: 1961,
    caption: "Volume 23-3, Chapter 2 Activity"
},
{
    src: "https://i.imgur.com/xIjxHgR.jpg",
    thumbnail: "https://i.imgur.com/xIjxHgRm.jpg",
    width: 2087,
    height: 1704,
    caption: "Volume 23-3, Chapter 2 Scene"
},
{
    src: "https://i.imgur.com/B3nurou.jpg",
    thumbnail: "https://i.imgur.com/B3nuroum.jpg",
    width: 3359,
    height: 2221,
    caption: "Volume 23-3, Chapter 3 Activity"
},
{
    src: "https://i.imgur.com/BBMzOOb.jpg",
    thumbnail: "https://i.imgur.com/BBMzOObm.jpg",
    width: 2351,
    height: 1500,
    caption: "Volume 23-3, Chapter 3 Scene"
},
{
    src: "https://i.imgur.com/HptliI7.jpg",
    thumbnail: "https://i.imgur.com/HptliI7m.jpg",
    width: 2783,
    height: 1961,
    caption: "Volume 23-4, Chapter 4 Activity"
},
{
    src: "https://i.imgur.com/feDD3P9.jpg",
    thumbnail: "https://i.imgur.com/feDD3P9m.jpg",
    width: 2783,
    height: 1961,
    caption: "Volume 23-4, Chapter 4 Scene"
},
{
    src: "https://i.imgur.com/uDxBwZf.jpg",
    thumbnail: "https://i.imgur.com/uDxBwZfm.jpg",
    width: 2783,
    height: 1961,
    caption: "Volume 23-4, Chapter 5 Activity"
},
{
    src: "https://i.imgur.com/ilyHkEk.jpg",
    thumbnail: "https://i.imgur.com/ilyHkEkm.jpg",
    width: 2783,
    height: 1961,
    caption: "Volume 23-4, Chapter 5 Scene"
},
{
    src: "https://i.imgur.com/6Gf6Wix.jpg",
    thumbnail: "https://i.imgur.com/6Gf6Wixm.jpg",
    width: 2113,
    height: 1872,
    caption: "Volume 24-2, Chapter 6 Activity"
},
{
    src: "https://i.imgur.com/KH61gxv.jpg",
    thumbnail: "https://i.imgur.com/KH61gxvm.jpg",
    width: 2113,
    height: 1872,
    caption: "Volume 24-2, Chapter 6 Scene"
},
{
    src: "https://i.imgur.com/dVOJaTq.jpg",
    thumbnail: "https://i.imgur.com/dVOJaTqm.jpg",
    width: 2113,
    height: 1872,
    caption: "Volume 24-2, Chapter 7 Scene 1"
},
{
    src: "https://i.imgur.com/Q0k9JCI.jpg",
    thumbnail: "https://i.imgur.com/Q0k9JCIm.jpg",
    width: 2113,
    height: 1872,
    caption: "Volume 24-2, Chapter 7 Scene 2"
},
{
    src: "https://i.imgur.com/elbppik.jpg",
    thumbnail: "https://i.imgur.com/elbppikm.jpg",
    width: 2522,
    height: 1742,
    caption: "Volume 24-3, Chapter 8 Activity"
},
{
    src: "https://i.imgur.com/nEGH608.jpg",
    thumbnail: "https://i.imgur.com/nEGH608m.jpg",
    width: 1261,
    height: 871,
    caption: "Volume 24-3, Chapter 8 Scene 1"
},
{
    src: "https://i.imgur.com/mQ4wFIe.jpg",
    thumbnail: "https://i.imgur.com/mQ4wFIem.jpg",
    width: 1261,
    height: 871,
    caption: "Volume 24-3, Chapter 8 Scene 2"
},
{
    src: "https://i.imgur.com/NJo4ZwG.jpg",
    thumbnail: "https://i.imgur.com/NJo4ZwGm.jpg",
    width: 2522,
    height: 1742,
    caption: "Volume 24-3, Chapter 9 Activity"
},
{
    src: "https://i.imgur.com/9Cokp0u.jpg",
    thumbnail: "https://i.imgur.com/9Cokp0um.jpg",
    width: 1261,
    height: 871,
    caption: "Volume 24-3, Chapter 9 Scene 1"
},
{
    src: "https://i.imgur.com/JqMs7mt.jpg",
    thumbnail: "https://i.imgur.com/JqMs7mtm.jpg",
    width: 1261,
    height: 871,
    caption: "Volume 24-3, Chapter 9 Scene 2"
}]

const artfight =
    [{
        src: "https://i.imgur.com/0cCXll1.jpg",
        thumbnail: "https://i.imgur.com/4FlUbCj.png",
        width: 1882,
        height: 1958,
        caption: "Character by @RainyArtist"
    },
    {
        src: "https://i.imgur.com/gRcPsz7.png",
        thumbnail: "https://i.imgur.com/QXXXj6R.png",
        width: 1422,
        height: 1924,
        caption: "Character by @manhlerf"
    },
    {
        src: "https://i.imgur.com/0glSSdo.png",
        thumbnail: "https://i.imgur.com/W60ySUQ.png",
        width: 1809,
        height: 2371,
        caption: "Character by @blackdeathlovr"
    },
    {
        src: "https://i.imgur.com/a5chukA.jpg",
        thumbnail: "https://i.imgur.com/aEMzv9l.png",
        width: 1623,
        height: 2505,
        caption: "Character by @Cotten"
    },
    {
        src: "https://i.imgur.com/f4E3MCw.png",
        thumbnail: "https://i.imgur.com/ncWpRqC.png",
        width: 1649,
        height: 1096,
        caption: "Character by @CrowRa"
    },
    {
        src: "https://i.imgur.com/1UA3XrY.png",
        thumbnail: "https://i.imgur.com/N5Tn5AG.png",
        width: 1441,
        height: 1254,
        caption: "Character by @kingshiou"
    },
    {
        src: "https://i.imgur.com/t7K81s9.png",
        thumbnail: "https://i.imgur.com/6wPwx9X.png",
        width: 1289,
        height: 1301,
        caption: "Character by @MinutesByMars"
    },
    {
        src: "https://i.imgur.com/cYfUogT.png",
        thumbnail: "https://i.imgur.com/QwOIj65.png",
        width: 1419,
        height: 1532,
        caption: "Character by @Brightness_"
    }]

const refs =
    [    {
        src: "https://i.imgur.com/1t4ca9Y.png",
        thumbnail: "https://i.imgur.com/lPYWgVi.png",
        width: 1909,
        height: 2554,
    },
    {
        src: "https://i.imgur.com/hF0Hvms.png",
        thumbnail: "https://i.imgur.com/7UwGG8S.png",
        width: 2000,
        height: 2540,
    },
    {
        src: "https://i.imgur.com/qWVCHeD.png",
        thumbnail: "https://i.imgur.com/EAaE6F1.png",
        width: 2000,
        height: 2573,
    },
    {
        src: "https://i.imgur.com/SOrxVSx.png",
        thumbnail: "https://i.imgur.com/OamVLL6.png",
        width: 2000,
        height: 2576,
    }]


export function Artwork(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const mediumViewport = useMediaQuery('(min-width:900px)');

    const esjView = useMediaQuery('(min-width:1200px)');

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
                            <StyledTab label="COMMISSIONS" {...a11yProps(0)} />
                            <StyledTab label="ESJ" {...a11yProps(1)} />
                            <StyledTab label="ARTFIGHT" {...a11yProps(2)} />
                        </Tabs>
                    </Slide>
                </Box>

                {/* Tab contents */}
                <Box sx={{ flexGrow: 1, height: '90vh', overflowY: 'auto', width: { xs: 'auto', md: '70vw' } }} >
                    <Box style={{ height: '90vh', width: '80%', marginLeft: 'auto', marginRight: 'auto' }} >

                        {/* Gallery */}
                        <TabPanel value={value} index={0} class="theme-force sidebar-item">
                            <ArtGallery images={gallery} width={230} height={230} />
                        </TabPanel>

                        {/* ESJ */}
                        <TabPanel value={value} index={1} class="theme-force sidebar-item">
                            <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                                <div style={{ display: 'flex', justifyContent: esjView ? 'space-between' : 'center', flexWrap: 'wrap-reverse', alignContent: 'center', overflowWrap: 'break-word', padding: '20px 0 20px 0', width: '70vw' }}>
                                    <ImageGallery items={esjCovers} showThumbnails={false} showPlayButton={false} autoPlay={true} showFullscreenButton={false} />
                                    <Box sx={{ width: { md: '100%', lg: '50%' } }}>
                                        <h1 className='subheading'>ELEMENTARY STEM JOURNAL</h1>
                                        <p style={{ textAlign: 'justify', width: '95%', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Cormorant Garamond', serif" }}>
                                            The <i>Elementary Stem Journal</i> is a theme-based journal produced electronically four
                                            times each school year. It is a dynamic journal for anyone interested in technological
                                            literacy in Grades K-6 <a href="https://www.iteea.org/39195.aspx" target="_blank" rel="noopener noreferrer" className="link">[1]</a>. <br /><br />
                                            Over the span of 2 years, I created 20 pieces of artwork across 4 volumes. My pieces
                                            served as visual aids to explain the concepts discussed in the article, as well as to
                                            create interactive activities at the end of each chapter. <br /><br />
                                            I worked alongside the author and coordinator to create artwork that would enhance the
                                            overall story and learning concepts, with multiple rounds of feedback and refinements
                                            for each chapter.
                                        </p>
                                    </Box>
                                </div>
                            </Grow>
                            <Divider className="theme-force" />
                            <div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
                                <ArtGallery images={esj} width={220} height={220} caption={true} />
                            </div>
                        </TabPanel>

                        {/* Art Fight */}
                        <TabPanel value={value} index={2} class="theme-force sidebar-item">
                            <Slide direction="top" in={true} timeout={700} mountOnEnter unmountOnExit>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignContent: 'center', overflowWrap: 'break-word', padding: '20px 0 20px 0' }}>
                                        <a href="https://artfight.net/" target="_blank" rel="noopener noreferrer" className="link">
                                            <h1 style={{ fontSize: '80px', marginLeft: 'auto', marginRight: 'auto' }}>ARTFIGHT</h1>
                                        </a>
                                        <Box sx={{ width: '45%', flexGrow: 1, paddingTop: { xs: '20px', lg: '0' } }}>
                                            <span> is an annual art game that lasts for 1 month. Players are split into two teams, and
                                                can "attack" by making art of other players' original characters to score points.</span>
                                        </Box>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <Box sx={{ m: 3, border: '2px solid', padding: { sm: '0px', md: '20px 70px 20px 70px' }, width: { sm: '100%', md: '40%' }, display: "flex", alignItems: "center" }}>
                                            <span>I took this event to practice bust and half-body shots, as well as refine my overall
                                                process for character artwork and design</span>
                                        </Box>
                                        <div style={{ paddingTop: '30px' }}>
                                            <ArtGallery images={refs} width={60} height={60} />
                                            <p style={{ fontSize: '12px' }}>MY CHARACTER REFS</p>
                                        </div>

                                    </div>

                                    <Divider className="theme-force" />
                                </div>
                            </Slide>
                            <ArtGallery images={artfight} width={200} height={200} caption={true} />
                        </TabPanel>

                    </Box>
                </Box>
            </Box>
        </div >
    );
}