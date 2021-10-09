import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  separator: {
    display: 'flex',
    alignItems: 'center'
  },
  line: {
    height: '2px',
    flex: '1',
    backgroundColor: '#000'
  },
  text: {
    padding: '0 2rem'
  }
}));

function DividerWithText ({ children }) {
    const { separator, line, text } = useStyles();

    return (
        <Box className={separator} component='div'>
          <Box className={line} component='div'></Box>
          <Typography className={text} variant='h4'>{children}</Typography>
          <Box className={line} component='div'></Box>
        </Box>
    );
};

export default DividerWithText;
