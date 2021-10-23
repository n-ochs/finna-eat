import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

// to include prices, add 'Box' from material-ui, uncomment CSS, add 'price' in props, add priceAmount in useStyles, and uncomment JSX

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 'auto',
        position: 'relative',
        margin: '1%',
        '@media (max-width: 900px)': {
            margin: 'auto',
            marginBottom: '4%'
        }
    },
    media: {
        height: 200
    },
    itemDescription: {
        marginBottom: '10px',
        '@media (max-width: 900px)': {
            marginBottom: '0'
        }
    },
    // priceAmount: {
    //     position: 'absolute',
    //     bottom: '0',
    //     right: '0',
    //     margin: '8px',
    //     padding: '2px 5px',
    //     textAlign: 'right',
    //     '@media (max-width: 900px)': {
    //         position: 'relative'
    //     }
    // }
});

function MenuCard({ name, description, img }) {
    const { root, media, itemDescription } = useStyles();

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
                <Typography className={itemDescription} variant='body2' color='textSecondary' component='p'>
                    {description}
                </Typography>
            </CardContent>
            {/* <Box className={priceAmount}>
                <Typography variant='subtitle2' color='primary' component='h3'>
                    {price}
                </Typography>
            </Box> */}
        </Card>
    );
};

export default MenuCard;
