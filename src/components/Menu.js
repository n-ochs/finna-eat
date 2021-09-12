import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import the504 from '../imgs/the504.jpeg';
import MenuCard from './MenuCard';

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

const menu = {
    food: [
        {
            title: "Lagniappe",
            items: [
                {
                    name: "The 415",
                    description: "Asian sisig fries topped with pork, green onion and cheese",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "Beaucoup Mac & Cheese",
                    description: "A delicate four cheese blend of white, sharp cheddar, colby jack and gouda cheese with large elbow macaroni in a silky milk blend",
                    price: "$12.99",
                    img: the504
                }
            ]
        },

        {
            title: "Vegetarian",
            items: [
                {
                    name: "Aye Woodie",
                    description: "Red Beans/Rice",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "The Berkley",
                    description: "Mushrooms and spinach sautéed in a light spicy tomato sauce over corn grits",
                    price: "$12.99",
                    img: the504
                }
            ]
        },

        {
            title: "Carnivore",
            items: [
                {
                    name: "Bayou Broth",
                    description: "Short ribs, shrimp, mussels, hot sausage and kimchi in a spicy asian broth over japanese noodles",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "City of Angels Chicken/Waffles",
                    description: "Marinated and cajun fried chicken thigh with a light waffles served with our in house made bourbon syrup",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "Mardi Gras Mambo",
                    description: "Our take on jambalaya pasta. Penne noodles served with chicken, andouille, spicy sausage and gulf shrimp in a creamy light tomato sauce",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "The 504",
                    description: "Marinated cajun fried chicken thigh on a brioche bun, house made cole slaw, pickles. May add our hyphe sauce or mayo on top",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "The Good Looks",
                    description: "Candied chicken wins. Six jumbo korean style chicken wings coated in sweet and spicy sauce",
                    price: "$12.99",
                    img: the504
                }
            ]
        },

        {
            title: "Pescatarian",
            items: [
                {
                    name: "Oaktown",
                    description: "Garlicky dungeness crab roasted in butter and server over asian style garlic noodles",
                    price: "$12.99",
                    img: the504
                },
                {
                    name: "The Uptown",
                    description: "Gulf shrimp, chicken andouille, shitake, king oyster and maitake mushrooms, sautéed spinach and jalepeno over corn grits. May add cheddar cheese for extra $1.00",
                    price: "$12.99",
                    img: the504
                }
            ]
        }
    ]
};

function Menu() {
    const classes = useStyles();

    return (
        <Box>
            <Typography variant='h2' align='center'>
                Menu
            </Typography>
            
            <Box display='flex' className={classes.container}>
                {menu.food.map((category, index) => {
                    return (
                        <Box key={index}>
                            <Typography variant='h4'>
                                {category.title}
                            </Typography>

                        {category.items.map((item, index) => {
                            return <MenuCard key={index} name={item.name} description={item.description} price={item.price} img={item.img} />
                        })}
                    </Box>
                )})}
            </Box>
        </Box>
    );
};

export default Menu;
