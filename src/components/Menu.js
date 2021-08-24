import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import menu from '../data/menu.json';

const useStyles = makeStyles(() => ({
    itemDescription: {
        fontStyle: 'italic'
    },
    container: {
        '@media (max-width: 900px)': {
            display: 'block'
        },
    },
}));

function Menu() {
    const classes = useStyles();

    return (
        <>

        <Typography variant='h1' align='center'>
            Menu
        </Typography>
        
        <Box display='flex' align='center' className={classes.container}>
            <Box>
                <Typography variant='h4'>
                    Lagniappe
                </Typography>

                {menu.Lagniappe.map((item) => (
                    <Box>
                        <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                        <Typography key={item.Name} className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        <br/><br/>
                    </Box>
                ))}
            </Box>

            <Box>
                <Typography variant='h4'>
                    Vegetarian
                </Typography>

                {menu.Vegetarian.map((item) => (
                    <Box>
                        <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                        <Typography key={item.Name} className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        <br/><br/>
                    </Box>
                ))}
            </Box>

            <Box>
                <Typography variant='h4'>
                    Carnivore
                </Typography>

                {menu.Carnivore.map((item) => (
                    <Box>
                        <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                        <Typography key={item.Name} className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        <br/><br/>
                    </Box>
                ))}
            </Box>

            <Box>
                <Typography variant='h4'>
                    Pescatarian
                </Typography>

                {menu.Pescatarian.map((item) => (
                    <Box>
                        <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                        <Typography key={item.Name} className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        <br/><br/>
                    </Box>
                ))}
            </Box>
        </Box>
        
        </>
    );
};

export default Menu;
