import React from 'react';
import { Box } from '@mui/material';
import { Grow, Slide } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function Home(props) {

    // Breakpoint dimensions for responsive carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 664 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 664, min: 0 },
            items: 2
        }
    };

    return (
        <div>
            <Grow in={true} timeout={800} mountOnEnter unmountOnExit>
                <div>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        infinite
                        responsive={responsive}
                        showDots={false}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        slidesToSlide={1}
                        customTransition={'transform 600ms ease-in-out'}
                        pauseOnHover={false}
                    >
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/8czOc7k.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/a5OQA1M.png)`, backgroundSize: '130%', backgroundPosition: '75% 30%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/TmVOAOdh.png)`, backgroundSize: '140%', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/NJCNlknh.jpg)`, backgroundSize: '140%', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/VaowLEch.png)`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />
                    </Carousel>
                </div>
            </Grow>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', textAlign: { xs: 'center', md: 'left' } }}>
                <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
                    <Box sx={{ m: '3.5vw 0 3.5vw 0', paddingLeft: { xs: '0px', lg: '70px' }, width: { xs: '100%', md: 'fit-content' } }}>
                        <h1>HI, I'M <br />MAVERICK.</h1>
                    </Box>
                </Slide>
                <Slide direction="left" in={true} timeout={1500} mountOnEnter unmountOnExit>
                    <Box sx={{ m: 3, border: '2px solid', padding: { sm: '0px', md: '60px' }, width: { sm: '100%', md: '40%' } }}>
                        <p>I'm an artist, web designer, and enthusiastic hobbyist based in Raleigh, NC.</p>
                    </Box>
                </Slide>
            </Box>

            <Grow in={true} timeout={800} style={{ transitionDelay: '200ms' }} mountOnEnter unmountOnExit>
                <div>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        infinite
                        responsive={responsive}
                        showDots={false}
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        slidesToSlide={1}
                        customTransition={'transform 600ms ease-in-out'}
                        pauseOnHover={false}
                    >
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/OO5EfIbh.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/GzWAgcHh.png)`, backgroundSize: '260%', backgroundPosition: '20% 40%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/WQVzUIA.jpg)`, backgroundSize: '100%', backgroundPosition: '50% 40%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/mBydfgCh.png)`, backgroundSize: '140%', backgroundPosition: '25% 25%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(https://i.imgur.com/b5AFuqc.jpg)`, backgroundSize: '100%', backgroundPosition: '30% 25%' }} />
                    </Carousel>
                </div>
            </Grow>

        </div >
    );
}