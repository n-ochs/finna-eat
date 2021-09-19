import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '300px',
        background: '#1e1415',
        display: 'flex'
    },
    content: {
        margin: 'auto',
        color: 'white'
    },
    socials: {

    }
}))

function Footer() {
    const { root, content, socials } = useStyles();
    return (
        <Box className={root}>
            <Box className={content}>
                <Box className={socials}>

                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
