import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 'auto',
        margin: '1%',
        '@media (max-width: 900px)': {
            margin: 'auto',
            marginBottom: '4%'
        }
    },
    media: {
        height: 200
    },
    price: {
        textAlign: 'right'
    }
});

function MenuCard(props) {
    const { root, media, price } = useStyles();

    return (
        <Card className={root} elevation={7}>
            <CardMedia 
                className={media} 
                image={props.img} 
                title={props.name} 
            />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {props.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {props.description}
                </Typography>
                <Typography className={price} variant='subtitle2' color='primary' component='h3'>
                    {props.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
