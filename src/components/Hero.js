import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        color: '#fff',
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
          height: 300,
          fontSize: '3em'
        }},
    logo: {
        height: '150px',
        width: '150px',
        border: 'solid black',
        borderRadius: '50%',
        marginTop: '1%',
        marginLeft: '2%',
        '@media (max-width: 900px)': {
            height: '100px',
            width: '100px'
        },
    }
}));

function Hero() {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <Box className={classes.logo} />
        </Box>
    );
};

export default Hero;
