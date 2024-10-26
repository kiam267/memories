import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

import {
  LockOutlined,
  Password,
} from '@mui/icons-material';
import {
  useNavigate,
  useNavigation,
} from 'react-router-dom';

// Metarial UI Styles
import useStyles from './styles';
import Input from './Input';
import { jwtDecoder } from '../../lib/jwt-decoder';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from '../../actions/auth';

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const switchMode = () => {
    setShowPassword(false);
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      
      dispatch(signin(formData, navigate));
    }
  };
  const hadelChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const googleSuccess = async e => {
    const { credential } = e;
    const user = jwtDecoder(credential);

    try {
      dispatch({
        type: 'AUTH',
        data: { user, token: credential },
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log('Google sign in was unsuccessful.');
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? 'Sign Up' : ' Sign in'}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handelSubmit}
        >
          <Grid container className="my-5" spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  hadelChange={hadelChange}
                  half={6}
                  autoFocus
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  hadelChange={hadelChange}
                  half={6}
                />
              </>
            )}
          </Grid>
          <Input
            name="email"
            label="Email Address"
            hadelChange={hadelChange}
            type="email"
          />
          <Input
            name="password"
            label="Password"
            hadelChange={hadelChange}
            type={showPassword ? 'password' : 'text'}
            handelShowPassword={() =>
              setShowPassword(
                prevShowPassword => !prevShowPassword
              )
            }
          />
          <GoogleLogin
            onSuccess={credentialResponse => {
              googleSuccess(credentialResponse);
              console.log(credentialResponse);
            }}
            onError={googleFailure}
          />

          {isSignUp && (
            <Input
              name="confirmPassword"
              label="Repeat Password"
              hadelChange={hadelChange}
              type="password"
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={`${classes.submit} mt-5`}
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account ? Sign In '
                  : ' Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
