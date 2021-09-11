import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import the504 from '../imgs/the504.jpeg'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '4%'
    },
    media: {
        height: 200
    },
    price: {
        textAlign: 'right'
    }
});

function MenuCard() {
    const { root, media, price } = useStyles();

    return (
        <Card className={root} elevation={7}>
            <CardMedia
                className={media} 
                image={the504} 
                title='The 504' 
            />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    The 504
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Marinated cajun fried chicken thigh on a brioche bun, house made cole slaw, pickles. May add our hyphe sauce or mayo on top
                </Typography>
                <Typography className={price} variant='subtitle2' color='primary' component='h3'>
                    $12.99
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
