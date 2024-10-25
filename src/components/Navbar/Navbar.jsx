import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, json } from 'react-router-dom';
// Metarial UI Styles
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  const [user, setUset] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  return (
    <AppBar
      className={classes.appBar}
      position="static"
      color="inherit"
    >
      <div className={classes.brandContainer}>
        <Typography
          // component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI"
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              className={classes.title}
              variant="h6"
              align="center"
            >
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            <Button
              href="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
