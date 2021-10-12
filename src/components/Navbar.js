import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const navItems = [
    {
        label: 'Home',
        href: '/',
        icon: <HomeIcon style={{ fontSize: 19, marginRight: 10 }} />
    },
    {
        label: 'About',
        href: '/about',
        icon: <InfoIcon style={{ fontSize: 19, marginRight: 10 }} />
    },
    {
        label: 'Find',
        href: '/find',
        icon: <MyLocationIcon style={{ fontSize: 19, marginRight: 10 }} />
    },
    {
        label: 'Book',
        href: '/book',
        icon: <EventAvailableIcon style={{ fontSize: 19, marginRight: 10 }} />
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: <ContactPhoneIcon style={{ fontSize: 19, marginRight: 10 }} />
    }
];
  
const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: 'primary',
        paddingRight: '79px',
        paddingLeft: '118px',
        '@media (max-width: 900px)': {
            paddingLeft: 0,
        },
    },
    logo: {
        fontWeight: 600,
        color: '#FFFEFE',
        textAlign: 'left',
        textTransform: 'none'
    },
    menuButton: {
        fontWeight: 700,
        size: '18px',
        marginLeft: '38px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    drawerContainer: {
        padding: '20px 30px',
    },
}));
  
function Navbar() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
    
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        
        setResponsiveness();
        
        window.addEventListener('resize', () => setResponsiveness());
        
        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);
    
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {finnaeatLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };
    
    const displayMobile = () => {
        const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
        <Toolbar>
            <IconButton
                {...{
                    edge: 'start',
                    color: 'inherit',
                    'aria-label': 'menu',
                    'aria-haspopup': 'true',
                    onClick: handleDrawerOpen,
                }}>
                <MenuIcon />
            </IconButton>

            <Drawer
                {...{
                    anchor: 'left',
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}>
                <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
            <div>{finnaeatLogo}</div>
        </Toolbar>
      );
    };

    const drawerClose = () => {
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    const getDrawerChoices = () => {
        return navItems.map(({ label, href, icon }) => {
            return (
            <Link
                {...{
                component: RouterLink,
                to: href,
                color: 'inherit',
                style: { textDecoration: 'none' },
                key: label,
                onClick: drawerClose
                }}>
            <MenuItem>{icon}{label}</MenuItem>
          </Link>
          );
        });
    };

    const finnaeatLogo = (
        <Button color='inherit' to='/' component={RouterLink} className={logo}>
            <Typography variant='h6' component='h1'>
                Finna-Eat
            </Typography>
        </Button>
    );
    
    const getMenuButtons = () => {
        return navItems.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: 'inherit',
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}>
                        {label}
                </Button>
            );
        });
    };
    
    return (
        <header>
            <AppBar className={header} position='static'>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
};

export default Navbar;