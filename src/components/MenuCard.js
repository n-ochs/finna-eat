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
    priceAmount: {
        textAlign: 'right'
    }
});

function MenuCard({ name, description, price, img }) {
    const { root, media, priceAmount } = useStyles();

    return (
        <Card className={root} elevation={7}>
            <CardMedia 
                className={media} 
                image={img} 
                title={name} 
            />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {description}
                </Typography>
                <Typography className={priceAmount} variant='subtitle2' color='primary' component='h3'>
                    {price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MenuCard;
