import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '175px',
        background: '#1e1415',
        display: 'flex',
        flexWrap: 'wrap'
    },
    content: {
        height: 'auto',
        margin: 'auto',
        color: 'white'
    },
    socials: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    icons: {
        width: '35px',
        height: '35px',
        marginLeft: '5px',
        marginRight: '5px'
    },
    contact: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    phoneNumber: {
        marginRight: '5%'
    },
    email: {
        marginLeft: '5%'
    },
    divider: {
        height: '0',
        width: '100%',
        borderBottom: '1px solid white',
        borderWidth: 'thin'
    },
    copyright: {
        width: '100%',
        textAlign: 'center',
        color: 'white'
    }
}));

function Footer() {
    const { root, content, socials, icons, contact, phoneNumber, email, divider, copyright } = useStyles();
    const socialIcons = [
        {
            href: 'https://www.facebook.com/Finna-Eat-109601537220056/',
            icon: <FaFacebookSquare className={icons} />
        },
        {
            href: 'https://www.instagram.com/finnaeatfoods/',
            icon: <FaInstagram className={icons} />
        },
        {
            href: 'https://www.tiktok.com/@finnaeatllc?',
            icon: <IoLogoTiktok className={icons} />
        },
    ];
    
    return (
        <Box className={root}>
            <Box className={content}>
                <Box className={socials}>
                    {socialIcons.map(({ href, icon }, index) => {
                        return (
                            <Button variant='text' key={index} onClick={() => window.open(href)} color='primary'>
                                {icon}
                            </Button>
                        )
                    })}
                </Box>
                <Box className={contact}>
                    <Typography className={phoneNumber} display='inline' variant='body2' component='p'>
                        504.215.3686
                    </Typography>
                    <Typography className={email} display='inline' variant='body2' component='p'>
                        finnaeatfoods@gmail.com
                    </Typography>
                </Box>
            </Box>
            <Box className={divider} />
            <Box className={copyright}>
                <Typography>
                    &copy; 2021 Finna-Eat | All Rights Reserved
                </Typography>

                
                <Link to='/login'>
                    <Typography>
                        Admin Login
                    </Typography>
                </Link>
                
            </Box>
        </Box>
    );
};

export default Footer;
