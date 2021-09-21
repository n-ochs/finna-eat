import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import MenuData from '../data/MenuData';
import MenuCard from './MenuCard';
import MenuBackground from '../imgs/MenuBackground.jpg';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${MenuBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    container: {
        '@media (max-width: 900px)': {
            display: 'block'
        },
    },
    title: {
        textAlign: 'center'
    },
    categories: {
        padding: '1%'
    },
    foodItems: {
        justifyContent: 'center'
    }
}));

function Menu() {
    const { root, container, title, categories, foodItems } = useStyles();

    return (
        <Box className={root}>
            <Typography variant='h2' align='center'>
                Menu
            </Typography>
            
            <Box className={container}>
                {MenuData.food.map((category, index) => {
                    return (
                        <Box className={categories} key={index}>
                            <Typography className={title} variant='h4'>
                                {category.title}
                            </Typography>
                        <Box className={foodItems} display='flex' flexWrap='wrap'>
                            {category.items.map((item, index) => {
                                return <MenuCard key={index} name={item.name} description={item.description} price={item.price} img={item.img} />
                            })}
                        </Box>
                    </Box>
                )})}
            </Box>
        </Box>
    );
};

export default Menu;
