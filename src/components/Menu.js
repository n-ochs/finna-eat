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
    menuItem: {
        minHeight: '13vh',
    }
}));

function Menu() {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant='h2' align='center'>
                Menu
            </Typography>
            
            <Box display='flex' align='center' className={classes.container}>
                <Box>
                    <Typography variant='h4'>
                        Lagniappe
                    </Typography>

                    {menu.Lagniappe.map((item, index) => (
                        <Box key={index} className={classes.menuItem}>
                            <Typography variant='subtitle1'>{item.Name}</Typography>
                            <Typography className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box>
                    <Typography variant='h4'>
                        Vegetarian
                    </Typography>

                    {menu.Vegetarian.map((item, index) => (
                        <Box key={index} className={classes.menuItem}>
                            <Typography variant='subtitle1'>{item.Name}</Typography>
                            <Typography className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box>
                    <Typography variant='h4'>
                        Carnivore
                    </Typography>

                    {menu.Carnivore.map((item, index) => (
                        <Box key={index} className={classes.menuItem}>
                            <Typography variant='subtitle1'>{item.Name}</Typography>
                            <Typography className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        </Box>
                    ))}
                </Box>

                <Box>
                    <Typography variant='h4'>
                        Pescatarian
                    </Typography>

                    {menu.Pescatarian.map((item, index) => (
                        <Box key={index} className={classes.menuItem}>
                            <Typography variant='subtitle1'>{item.Name}</Typography>
                            <Typography className={classes.itemDescription} variant='caption'>{item.Description}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Menu;
