import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from '../styles/hero';
import { Button } from '../../../components/ui/Buttton';

function Hero() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.hero}>
      <Typography
        variant="h1"
        className={classes.text}
        sx={{
          fontWeight: 'bold',
          [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
          },
        }}
      >
        Create a gallery that is secure and adheres to
        strict regulations.
      </Typography>

      <Box component="div" className={classes.imageBody}>
        <img
          className={classes.imageArrow}
          src="./src/assets/icons/arrow.png"
          alt="arrow"
        />

        <div
          style={{
            marginTop: '20px',
            border: '3px dashed   black',
            padding: '6px',
            borderRadius: '20px',
          }}
        >
          <img
            src="/src//assets/gif/drag-and-drop.gif"
            alt="Animated GIF"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
      </Box>

      <div>
        <Link
          to="/auth"
          style={{
            color: 'white',
          }}
        >
          <Button>let's go</Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;