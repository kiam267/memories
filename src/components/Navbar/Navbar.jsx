import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Metarial UI Styles
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userData = useSelector(
    state => state.auth.authData
  ); // Corrected the key

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  useEffect(() => {
    if (userData) {
      setUser(userData);
      navigate('/');
    }
  }, [userData, navigate]);

  // useEffect(() => {
  //   const storedProfile = localStorage.getItem('profile');
  //   if (storedProfile) {
  //     setUser(JSON.parse(storedProfile));
  //   }
  // }, []);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);
  };

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
            <div className={classes.user}>
              <Avatar
                className={classes.purple}
                alt={user.user.name}
                src={user.user.picture}
              >
                {user.user.name.charAt(0)}
              </Avatar>
              <Typography
                className={classes.title}
                variant="h6"
                align="center"
              >
                {user.user.name}
              </Typography>
            </div>

            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
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
