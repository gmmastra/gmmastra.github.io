import React from 'react';
import { Box, Button, Grow } from '@mui/material';
import { ArtGallery } from "../components/ArtGallery";

export function GameDev(props) {

    const supplyRun = [
        {
            src: "https://i.imgur.com/Tx4AFif.png",
            thumbnail: "https://i.imgur.com/Tx4AFifl.png",
            width: 1289,
            height: 621
        },
        {
            src: "https://i.imgur.com/10A37sH.png",
            thumbnail: "https://i.imgur.com/10A37sHl.png",
            width: 1290,
            height: 625
        },
        {
            src: "https://i.imgur.com/TTZPcRi.png",
            thumbnail: "https://i.imgur.com/TTZPcRil.png",
            width: 1299,
            height: 624
        },
        {
            src: "https://i.imgur.com/mKfeYU8.png",
            thumbnail: "https://i.imgur.com/mKfeYU8l.png",
            width: 1303,
            height: 624
        }]

    return (
        <div>
            <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                <div>

                    {/* ASTEROIDS */}
                    <Box class="game-row">
                        <Box sx={{ width: { xs: 'auto', md: '35%' }, textAlign: { xs: 'center', md: 'right' } }}>
                            <img src="https://i.imgur.com/ep2NFiw.png" width="300px" alt="asteroids"></img>
                        </Box>
                        <Box sx={{ width: { xs: 'auto', md: '50%' }, marginRight: '10%' }}>
                            <h1 style={{ fontSize: '50px' }}>ASTEROIDS</h1>
                            <b><p style={{ fontSize: '25px', marginTop: '-15px' }}>2021</p></b>

                            <span>ASTEROIDS is a remake of the popular arcade game, now in 3D! I developed this
                                game in Unity, as part of my final project for the Intro to Computer Graphics
                                course at NC State. </span>

                            <div style={{ marginTop: '20px' }}>
                                <Button class="game-button" href="https://gmastr.itch.io/asteroids" target="_blank">
                                    PLAY
                                </Button>
                            </div>
                        </Box>
                    </Box>

                    {/* PIONEERS */}
                    <Box class="game-row" style={{ flexWrap: 'wrap-reverse' }}>
                        <Box sx={{ width: { xs: 'auto', md: '50%' }, marginLeft: '10%', textAlign: 'right' }}>
                            <h1 style={{ fontSize: '50px' }}>PIONEERS</h1>
                            <b><p style={{ fontSize: '25px', marginTop: '-15px' }}>2021</p></b>

                            <span>PIONEERS is a short interactive fiction game developed in Twine. I
                                developed this game for my Game Design class at NC State, taking inspiration
                                from a number of Infocom games such as <i>'Zork'</i> and <i>'Hitchhiker's
                                Guide to the Galaxy'.</i> </span>

                            <div style={{ marginTop: '20px' }}>
                                <Button class="game-button" href="https://gmastr.itch.io/pioneers" target="_blank">
                                    PLAY
                                </Button>
                            </div>
                        </Box>
                        <Box sx={{ width: { xs: 'auto', md: '35%' } }}>
                            <img src="https://i.imgur.com/gALyjZy.jpg" width="300px" alt="pioneers"></img>
                        </Box>
                    </Box>

                    {/* HIDE */}
                    <Box class="game-row">
                        <Box sx={{ width: { xs: 'auto', md: '35%' }, textAlign: { xs: 'center', md: 'right' } }}>
                            <img src="https://i.imgur.com/wVw8WhJ.png" width="300px" alt="hide"></img>
                        </Box>
                        <Box sx={{ width: { xs: 'auto', md: '50%' }, marginRight: '10%' }}>
                            <h1 style={{ fontSize: '50px' }}>HIDE</h1>
                            <b><p style={{ fontSize: '25px', marginTop: '-15px' }}>2021</p></b>

                            <span>HIDE is a top-down puzzle game developed using PuzzleScript. I created
                                this game as part of a group for the Interactive Game Design course at
                                NC State. </span>

                            <div style={{ marginTop: '20px' }}>
                                <Button class="game-button" href="https://gmastr.itch.io/hide" target="_blank">
                                    PLAY
                                </Button>
                            </div>
                        </Box>
                    </Box>

                    {/* SUPPLY RUN */}
                    <Box class="game-row" style={{ flexWrap: 'wrap-reverse' }}>
                        <Box sx={{ width: { xs: 'auto', md: '50%' }, marginLeft: '10%', textAlign: 'right' }}>
                            <h1 style={{ fontSize: '50px' }}>SUPPLY RUN</h1>
                            <b><p style={{ fontSize: '25px', marginTop: '-15px' }}>2018</p></b>

                            <span>SUPPLY RUN is a small 2.5D sidescroller developed in Unity during my
                                senior year of high school. This was my first time creating a
                                fully-functional, multi-level game, as well as my introduction to 
                                using Unity. </span>
                        </Box>
                        <Box sx={{ width: { xs: 'auto', md: '35%' } }}>
                            <iframe
                                src="https://www.youtube.com/embed/lJ_cK6vx_C0"
                                width="350"
                                height="200"
                                title="supply-run-demo"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </Box>
                    </Box>
                    <div style={{ width: '80%', margin: '0 auto 80px auto' }}>
                        <ArtGallery images={supplyRun} width={220} height={220} caption={true} />
                    </div>

                    {/* BURGER STACKER */}
                    <Box class="game-row">
                        <Box sx={{ width: { xs: 'auto', md: '35%' }, textAlign: { xs: 'center', md: 'right' } }}>
                        <iframe
                                src="https://www.youtube.com/embed/YE2PGUsXw0g"
                                width="350"
                                height="300"
                                title="burger-stacker-demo"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </Box>
                        <Box sx={{ width: { xs: 'auto', md: '50%' }, marginRight: '10%' }}>
                            <h1 style={{ fontSize: '50px' }}>BURGER STACKER</h1>
                            <b><p style={{ fontSize: '25px', marginTop: '-15px' }}>2018</p></b>

                            <span>BURGER STACKER is a short game made my senior year of highschool
                                for the Create Task portion of the AP Computer Science exam. This was a
                                partner project made using Snap! programming, and was my first time ever
                                programming a game. Logo and all assets were made by myself.</span>

                            <div style={{ margin: '20px' }} />

                        </Box>
                    </Box>

                </div>
            </Grow >
        </div >
    );
}