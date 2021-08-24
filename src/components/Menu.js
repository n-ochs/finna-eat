import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import menu from '../data/menu.json';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '1%'
    },
    container: {
        height: '100%',
        width: 'auto',
        border: 'solid black'
    },
    itemName: {
        fontStyle: 'italic'
    }
}));

function Menu() {
    const classes = useStyles();
    console.log(menu.Lagniappe)

    return (
        <>

        <Typography variant='h1'>
            Menu
        </Typography>
        
        <Typography variant='h5'>
            Lagniappe
        </Typography>

        {menu.Lagniappe.map((item) => (
            <>
                <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                <Typography key={item.Name} className={classes.itemName} variant='caption'>{item.Description}</Typography>
            </>
        ))}

        <Typography variant='h5'>
            Vegetarian
        </Typography>

        {menu.Vegetarian.map((item) => (
            <>
                <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                <Typography key={item.Name} className={classes.itemName} variant='caption'>{item.Description}</Typography>
            </>
        ))}

        <Typography variant='h5'>
            Carnivore
        </Typography>

        {menu.Carnivore.map((item) => (
            <>
                <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                <Typography key={item.Name} className={classes.itemName} variant='caption'>{item.Description}</Typography>
            </>
        ))}

        <Typography variant='h5'>
            Pescatarian
        </Typography>

        {menu.Pescatarian.map((item) => (
            <>
                <Typography key={item.Name} variant='subtitle1'>{item.Name}</Typography>
                <Typography key={item.Name} className={classes.itemName} variant='caption'>{item.Description}</Typography>
            </>
        ))}

        </>

        // <Grid container className={classes.root} spacing={2}>
        //     <Grid item xs={12}>
        //         <Grid container justifyContent='center' spacing={10}>
        //             {menu.Lagniappe.map((item) => (
        //                 <Grid key={item.Name} item>
        //                     <Container className={classes.container}>
        //                         <Typography>
        //                             {item.Name}
        //                         </Typography>
        //                     </Container>
        //                 </Grid>
        //             ))}
        //         </Grid>
        //     </Grid>
        // </Grid>
    );
};

export default Menu;
