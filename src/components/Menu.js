import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '1%'
    },
    container: {
        height: '100%',
        width: 'auto',
        border: 'solid black'
    }
}));

function Menu() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent='center' spacing={10}>
                    {[0, 1].map((value) => (
                        <Grid key={value} item>
                            <Container className={classes.container}>
                                Menu Item
                            </Container>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Menu;
