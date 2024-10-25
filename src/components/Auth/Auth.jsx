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

import { LockOutlined, Password } from '@mui/icons-material';

// Metarial UI Styles
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const switchMode = () => {
    setShowPassword(false);
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
  };
 
  const handelSubmit = () => {};
  const hadelChange = () => {};
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? 'Sign Up' : ' Sign in'}
        </Typography>
        <form className={classes.form} onSubmit={handelSubmit}>
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
              setShowPassword(prevShowPassword => !prevShowPassword)
            }
          />
          <GoogleLogin
            
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          ;
          {isSignUp && (
            <Input
              name="confirmPassword"
              label="Repeat Password"
              hadelChange={hadelChange}
              type="password"
            />
          )}
          {isSignUp && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={`${classes.submit} mt-5`}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp ? 'Already have an account ? Sign In ' : ' Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
