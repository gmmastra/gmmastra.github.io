import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Grow from '@mui/material/Grow';

export function ArtGallery(props) {

    const mediumViewport = useMediaQuery('(min-width:1250px)');
    const smallViewport = useMediaQuery('(min-width:970px)');

    const smallItemStyles = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: props.width,
        height: props.height,
        borderRadius: '10px'
    }

    return (
        <div style={{ paddingTop: '15px' }}>
            <Gallery withCaption>
                <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: mediumViewport ? 'repeat(4, 1fr)' : smallViewport ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                            gridGap: 10,
                        }}
                    >
                        {props.images.map((image) =>
                            <Item
                                original={image.src}
                                thumbnail={image.thumbnail}
                                width={image.width}
                                height={image.height}
                                caption={image.caption}
                            >
                                {({ ref, open }) => (
                                    <img
                                        style={smallItemStyles}
                                        src={image.thumbnail}
                                        ref={ref}
                                        alt={ref}
                                        onClick={open}
                                    />
                                )}
                            </Item>
                        )}
                    </div>
                </Grow>
            </Gallery>
        </div >
    );
}