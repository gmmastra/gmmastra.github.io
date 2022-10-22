import React, { useState } from "react";
import { TextField, Button, Box, Slide, Grow } from '@mui/material';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/2736b640-51de-11ed-9f58-f3ab7f1a635a";

export function Contact(props) {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </div>
        );
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
            <Slide direction="down" in={true} timeout={500} mountOnEnter unmountOnExit>
                <h1 style={{ fontSize: '50px', width: '100%', textAlign: 'center' }}>CONTACT ME</h1>
            </Slide>
            <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                    width="70%"
                >
                    <Box width={350}>
                        <div>
                            <TextField
                                label="Name"
                                variant="outlined"
                                name="name"
                                size="small"
                                margin="dense"
                                color="warning"
                                InputProps={{ className: "contactInput" }}
                                InputLabelProps={{ className: "contactInputLabel" }}
                                fullWidth
                                required />
                        </div>
                        <div>
                            <TextField
                                label="Email"
                                variant="outlined"
                                id="contactInput"
                                name="email"
                                size="small"
                                margin="dense"
                                color="warning"
                                InputProps={{ className: "contactInput" }}
                                InputLabelProps={{ className: "contactInputLabel" }}
                                fullWidth
                                required />
                        </div>
                        <div>
                            <TextField
                                label="Message"
                                variant="outlined"
                                name="message"
                                size="small"
                                margin="normal"
                                color="warning"
                                InputProps={{ className: "contactInput" }}
                                InputLabelProps={{ className: "contactInputLabel" }}
                                fullWidth
                                multiline
                                required />
                        </div>
                        <div style={{ marginTop: '20px', float: 'right' }}>
                            <Button class="game-button" type="submit" style={{ cursor: 'pointer' }}>
                                Send a message
                            </Button>
                        </div>
                    </Box>
                </form>
            </Grow >
        </div>
    );
}