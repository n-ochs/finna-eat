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
    },
    menuSection: {
        marginBottom: '5vh'
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
                {menu.food.map((category, index) => (
                    <Box key={index} className={classes.menuSection}>
                        <Typography variant='h4'>
                            {category.title}
                        </Typography>
                        
                        {category.items.map((item, index) => (
                            <Box key={index} className={classes.menuItem}>
                                <Typography variant='subtitle1'>{item.Name}</Typography>
                                <Typography variant='caption' className={classes.itemDescription}>{item.Description}</Typography>
                            </Box>
                        ))}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Menu;
