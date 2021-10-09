import React from 'react';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import * as Scroll from 'react-scroll';
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
    },
    button: {
        position: 'absolute',
        bottom: '30px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '200px'
    }
}));

function Hero() {
    const { hero, theLogo, slogan, button } = useStyles();
    const path = useLocation().pathname;
    const location = path.split('/')[1];
    const history = useHistory();
    const scroller = Scroll.scroller;

    const scrollToMenu = () => {
        scroller.scrollTo('Menu', {
            delay: 100,
            smooth: true,
        });
    };

    const goToHomeAndScroll = async () => {
        await history.push('/');
        await scroller.scrollTo('Menu', {
            delay: 100,
            smooth: true,
        });
    };

    return (
        <Paper className={hero} elevation={0} square>
            <img className={theLogo} src={logo} alt='Finna-Eat logo' />
            <Typography className={slogan} variant='h2'>
                JUST GOOD FOOD
            </Typography>
            {location === '' ? 
            (<Button 
                className={button} variant='contained' color='primary' onClick={scrollToMenu}>Check out our menu!</Button>) 
            : 
            (<Button className={button} variant='contained' color='primary' onClick={goToHomeAndScroll}>Check out our menu!</Button>)}
        </Paper>
    );
};

export default Hero;
