import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

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
    marginLeft: '5px',
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


export function WebDev(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const mediumViewport = useMediaQuery('(min-width:900px)');

    return (
        <div style={{ display: 'flex' }} class="theme-force">

            {/* Desktop Menu */}
            <Box class="sidebar">
                <Box sx={{ width: { xs: '140vw', md: 'auto' }, display: 'flex', justifyContent: 'center' }}>
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
                            <StyledTab label="WORK & SCHOOL" {...a11yProps(0)} />
                            <StyledTab label="PERSONAL" {...a11yProps(1)} />
                        </Tabs>
                    </Slide>
                </Box>

                {/* Tab contents */}
                <Box style={{ flexGrow: 1 }} >
                    <TabPanel value={value} index={0} class="theme-force sidebar-item">
                        <h2> WORK & SCHOOL </h2>
                    </TabPanel>
                    <TabPanel value={value} index={1} class="theme-force sidebar-item">
                        <h2> PERSONAL </h2>
                    </TabPanel>
                </Box>

            </Box>

        </div >
    );
}