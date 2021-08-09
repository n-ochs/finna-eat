import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import logo from '../imgs/logo.png';

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
        height: '250px',
        width: 'auto',
        marginTop: '1%',
        marginLeft: '1%',
        '@media (max-width: 900px)': {
            height: '100px',
            width: 'auto'
        },
    }
}));

function Hero() {
    const classes = useStyles();
    return (
        <Box className={classes.hero}>
            <img className={classes.logo} src={logo} alt='Finna-Eat logo' />
        </Box>
    );
};

export default Hero;
