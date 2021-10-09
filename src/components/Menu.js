import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import MenuData from '../data/MenuData';
import MenuCard from './MenuCard';
import MenuBackground from '../imgs/MenuBackground.jpg';
import DividerWithText from './DividerWithText';

const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: `url(${MenuBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    title: {
        fontFamily: 'Pacifico'
    },
    container: {
        '@media (max-width: 900px)': {
            display: 'block'
        },
    },
    categories: {
        padding: '1%'
    },
    foodItems: {
        justifyContent: 'center'
    }
}));

function Menu() {
    const { root, title, container, categories, foodItems } = useStyles();

    return (
        <Box className={root} id='Menu'>
            <Typography className={title} variant='h2' align='center'>
                Menu
            </Typography>
            
            <Box className={container}>
                {MenuData.food.map((category, index) => {
                    return (
                        <Box className={categories} key={index}>
                            <DividerWithText>{category.title}</DividerWithText>
                        <Box className={foodItems} display='flex' flexWrap='wrap'>
                            {category.items.map(({ name, description, price, img }, index) => {
                                return <MenuCard key={index} name={name} description={description} price={price} img={img} />
                            })}
                        </Box>
                    </Box>
                )})}
            </Box>
        </Box>
    );
};

export default Menu;
