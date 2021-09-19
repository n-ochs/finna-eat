import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '300px',
        background: '#1e1415',
        display: 'flex'
    },
    content: {
        margin: 'auto',
        color: 'white',
    },
    socials: {

    },
    icons: {
        width: '35px',
        height: '35px',
        marginLeft: '5px',
        marginRight: '5px'
    }
}));

function Footer() {
    const { root, content, socials, icons } = useStyles();
    return (
        <Box className={root}>
            <Box className={content}>
                <Box className={socials}>
                    <FaFacebookSquare className={icons} />
                    <FaInstagram className={icons} />
                    <IoLogoTiktok className={icons} />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
