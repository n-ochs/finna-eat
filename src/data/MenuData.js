//Item Images
import The504 from '../imgs/The504.jpeg';
import CityOfAngels from '../imgs/CityOfAngels.jpeg';
import TheGoodLooks from '../imgs/TheGoodLooks.jpeg';
import MardiGrasMambo from '../imgs/MardiGrasMambo.png';
import BayouBroth from '../imgs/BayouBroth.jpeg';
import TheUptown from '../imgs/TheUptown.jpeg';

const MenuData = {
    food: [
        {
            title: 'Carnivore',
            items: [
                {
                    name: 'Bayou Broth',
                    description: 'Short ribs, shrimp, mussels, hot sausage and kimchi in a spicy asian broth over japanese noodles',
                    price: '$12.99',
                    img: BayouBroth
                },
                {
                    name: 'City of Angels Chicken/Waffles',
                    description: 'Marinated and cajun fried chicken thigh with a light waffles served with our in house made bourbon syrup',
                    price: '$12.99',
                    img: CityOfAngels
                },
                {
                    name: 'Mardi Gras Mambo',
                    description: 'Our take on jambalaya pasta. Penne noodles served with chicken, andouille, spicy sausage and gulf shrimp in a creamy light tomato sauce',
                    price: '$12.99',
                    img: MardiGrasMambo
                },
                {
                    name: 'The 504',
                    description: 'Marinated cajun fried chicken thigh on a brioche bun, house made cole slaw, pickles. May add our hyphe sauce or mayo on top',
                    price: '$12.99',
                    img: The504
                },
                {
                    name: 'The Good Looks',
                    description: 'Candied chicken wings. Six jumbo korean style chicken wings coated in sweet and spicy sauce',
                    price: '$12.99',
                    img: TheGoodLooks
                }
            ]
        },

        {
            title: 'Lagniappe',
            items: [
                {
                    name: 'The 415',
                    description: 'Asian sisig fries topped with pork, green onion and cheese',
                    price: '$12.99',
                    img: The504
                },
                {
                    name: 'Beaucoup Mac & Cheese',
                    description: 'A delicate four cheese blend of white, sharp cheddar, colby jack and gouda cheese with large elbow macaroni in a silky milk blend',
                    price: '$12.99',
                    img: The504
                }
            ]
        },

        {
            title: 'Vegetarian',
            items: [
                {
                    name: 'Aye Woodie',
                    description: 'Red Beans/Rice',
                    price: '$12.99',
                    img: The504
                },
                {
                    name: 'The Berkley',
                    description: 'Mushrooms and spinach saut??ed in a light spicy tomato sauce over corn grits',
                    price: '$12.99',
                    img: The504
                }
            ]
        },

        {
            title: 'Pescatarian',
            items: [
                {
                    name: 'Oaktown',
                    description: 'Garlicky dungeness crab roasted in butter and server over asian style garlic noodles',
                    price: '$12.99',
                    img: The504
                },
                {
                    name: 'The Uptown',
                    description: 'Gulf shrimp, chicken andouille, shitake, king oyster and maitake mushrooms, saut??ed spinach and jalepeno over corn grits. May add cheddar cheese for extra $1.00',
                    price: '$12.99',
                    img: TheUptown
                }
            ]
        }
    ]
};

export default MenuData;
