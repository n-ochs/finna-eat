import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
    },
    portrait: {
        height: '475px',
        width: '400px',
        border: 'solid black',
        marginRight: '5%',
        '@media (max-width: 900px)': {
            marginRight: 'auto'
        },
    },
    text: {
        height: 'auto',
        width: '50%',
        '@media (max-width: 900px)': {
            width: 'auto'
        },
    }
}));

function Bio() {

    const classes = useStyles();

    return (
        <>
        <Typography className={classes.title} variant='h2'>
            About Us
        </Typography>
            <Box display='flex' flexWrap='wrap' m={1} p={1} className={classes.container}>
                <Box className={classes.portrait}>
                    {/* image here */}
                </Box>
                <Box className={classes.text}>
                    <Typography>
                        Finna-Eat experiments with a variety of ethnic cuisine from the places I have traveled and infused with my own Cajun Creole roots. Mostly inspired by in season fresh ingredients, our menu rotates often but will feature daily staple dishes.
                        <br/><br/>
                        After 37 years in a career in nursing, I decided to pursue my passion for cooking. My experiences in the kitchen started when a was in my teen years and began watching my mother and grandmother. They always made very large, fresh Cajun meals that could feed at least 10 people. No boxes, cans, or precut ingredients were ever used because as my grandmother said, “I want to control what is added”. During those times my mother would only allow me to stir the pot occasionally because food was too expensive to “mess up” as she most politely stated. Despite mostly observing her techniques, I watched and wrote them down and I believe that is what has allowed me to develop my cooking skills beyond my own ethnic background.
                        <br/><br/>
                        Seeing how people would react to the food my mother and grandmother made finally helped me understand that really, the way to anyones heart really is through their stomach! Feed them well and they will visit often! Cooking is an art that is enhanced by the chefs love for the people whom they serve. Watching a person taste the first bite of my delicious Cajun chicken sandwich genuinely brings me joy.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Bio;
