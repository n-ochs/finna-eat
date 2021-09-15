import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import logo from '../imgs/logo.png';
import jumbotron from '../imgs/Hero.png';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `url(${jumbotron})`,
        height: '800px',
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
    theLogo: {
        height: '250px',
        width: 'auto',
        marginTop: '1%',
        marginLeft: '1%',
        position: 'absolute',
        '@media (max-width: 900px)': {
            height: '100px',
            width: 'auto'
        },
    },
    slogan: {
        margin: 'auto',
        fontStyle: 'italic',
        textShadow: '#FFF 0 0 10px',
        '@media (max-width: 900px)': {
            fontSize: '50%'
        }
    }
}));

function Hero() {
    const { hero, theLogo, slogan } = useStyles();
    return (
        <Paper className={hero} elevation={0} square>
            <img className={theLogo} src={logo} alt='Finna-Eat logo' />
            <Typography className={slogan} variant='h2'>
                JUST GOOD FOOD
            </Typography>
        </Paper>
    );
};

export default Hero;
