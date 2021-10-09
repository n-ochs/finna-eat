import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import AboutBackground from '../imgs/AboutBackground.jpg';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${AboutBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '1%'
    },
    container: {
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Pacifico'
    },
    portrait: {
        height: '475px',
        width: '400px',
        border: '2px solid black',
        borderRadius: '50px',
        marginRight: '5%',
        '@media (max-width: 900px)': {
            marginRight: 'auto'
        }
    },
    text: {
        height: 'auto',
        display: 'flex',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '50%',
        '@media (max-width: 900px)': {
            width: 'auto'
        }
    }
}));

function Bio() {
    const { root, container, title, portrait, text } = useStyles();

    return (
        <Box className={root}>
        <Typography className={title} variant='h2'>
            About Us
        </Typography>
            <Box display='flex' flexWrap='wrap' p={1} className={container}>
                <Box className={portrait}>
                    {/* image here */}
                </Box>
                <Box className={text}>
                    <Typography>
                        Finna-Eat experiments with a variety of ethnic cuisine from the places I have traveled and infused with my own Cajun Creole roots. Mostly inspired by in season fresh ingredients, our menu rotates often but will feature daily staple dishes.
                        <br/><br/>
                        After 37 years in a career in nursing, I decided to pursue my passion for cooking. My experiences in the kitchen started when a was in my teen years and began watching my mother and grandmother. They always made very large, fresh Cajun meals that could feed at least 10 people. No boxes, cans, or precut ingredients were ever used because as my grandmother said, “I want to control what is added”. During those times my mother would only allow me to stir the pot occasionally because food was too expensive to “mess up” as she most politely stated. Despite mostly observing her techniques, I watched and wrote them down and I believe that is what has allowed me to develop my cooking skills beyond my own ethnic background.
                        <br/><br/>
                        Seeing how people would react to the food my mother and grandmother made finally helped me understand that really, the way to anyones heart really is through their stomach! Feed them well and they will visit often! Cooking is an art that is enhanced by the chefs love for the people whom they serve. Watching a person taste the first bite of my delicious Cajun chicken sandwich genuinely brings me joy.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Bio;
