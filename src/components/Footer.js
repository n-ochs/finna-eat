import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
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
        justifyContent: 'center'
    },
    phoneNumber: {
        marginRight: '10%'
    },
    email: {
        marginLeft: '10%'
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
    
    return (
        <Box className={root}>
            <Box className={content}>
                <Box className={socials}>
                    <FaFacebookSquare className={icons} />
                    <FaInstagram className={icons} />
                    <IoLogoTiktok className={icons} />
                </Box>
                <Box className={contact}>
                    <Typography className={phoneNumber} display='inline' variant='body2' component='p'>
                        123-123-1234
                    </Typography>
                    <Typography className={email} display='inline' variant='body2' component='p'>
                        finnaeat@gmail.com
                    </Typography>
                </Box>
            </Box>
            <Box className={divider} />
            <Box className={copyright}>
                <Typography>
                    &copy; 2021 Finna-Eat | All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
