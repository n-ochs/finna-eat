import React from 'react';
import logo from '../imgs/logo.png';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    Logo: {
        height: 'auto',
        width: '45%',
        fontWeight: 600
    },
    title: {
        fontSize: '5rem',
        '@media (max-width: 900px)': {
            fontSize: '3rem',
            margin: '1%'
        },
        margin: '1%'
    },
    text: {
        margin: '1%',
        '@media (max-width: 900px)': {
            fontSize: '1rem',
            margin: '1%'
        },
    }
}));

function Parking() {

    const classes = useStyles();

    return (
            <Grid
                container
                spacing={0}
                direction='column'
                alignItems='center'
                justifyContent='center'
                style={{ minHeight: '100vh' }}
            >
                <Typography className={classes.title} variant='h2' component='h2'>
                    COMING SOON
                </Typography>
                <img className={classes.Logo} src={logo} alt='Finna-Eat logo' />
                <Typography className={classes.text} align='center' variant='body1'>
                    Our website is currently under construction. Please check back with us shortly.
                </Typography>
            </Grid>
    );
};

export default Parking;
