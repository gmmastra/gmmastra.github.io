import React from 'react';
import Slide from '@mui/material/Slide';

export function Artwork(props) {

    return (
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <div>
            <p> Artwork </p>
        </div>
        </Slide >
    );
}