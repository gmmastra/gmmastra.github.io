import React from 'react';
import { Box } from '@mui/material';
import { Grow, Slide } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/images/carousel/image1.jpg";
import image2 from "../assets/images/carousel/image2.jpg";
import image3 from "../assets/images/carousel/image3.jpg";
import image4 from "../assets/images/carousel/image4.png";
import image5 from "../assets/images/carousel/image5.png";
import image6 from "../assets/images/carousel/image6.jpg";
import image7 from "../assets/images/carousel/image7.png";
import image8 from "../assets/images/carousel/image8.png";
import image9 from "../assets/images/carousel/image9.png";
import image10 from "../assets/images/carousel/image10.png";

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
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image2})`, backgroundSize: '200%', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image3})`, backgroundSize: '140%', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image5})`, backgroundSize: '140%', backgroundPosition: 'center' }} />
                    </Carousel>
                </div>
            </Grow>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', textAlign: { xs: 'center', md: 'left' } }}>
                <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
                    <Box sx={{ m: '3.5vw 0 3.5vw 0', paddingLeft: { xs: '0px', lg: '70px' }, width: { xs: '100%', md: 'fit-content' } }}>
                        <h1>HI, I'M <br />GIANNA.</h1>
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
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image6})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image7})`, backgroundSize: '260%', backgroundPosition: '20% 40%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image8})`, backgroundSize: '140%', backgroundPosition: 'center' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image9})`, backgroundSize: '140%', backgroundPosition: '25% 25%' }} />
                        <div className='carousel-item-padding-40-px' style={{ height: '170px', backgroundImage: `url(${image10})`, backgroundSize: '200%', backgroundPosition: '30% 25%' }} />
                    </Carousel>
                </div>
            </Grow>

        </div >
    );
}