import React from 'react';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import Grow from '@mui/material/Grow';

export function ArtGallery(props) {

    const smallItemStyles = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: props.width,
        height: props.height,
        borderRadius: '10px',
        margin: '10px'
    }

    return (
        <div style={{ paddingTop: '15px', marginLeft: 'auto', marginRight: 'auto' }}>
            <Gallery withCaption>
                <Grow in={true} timeout={600} mountOnEnter unmountOnExit>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
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