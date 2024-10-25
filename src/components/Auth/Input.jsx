import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, TextField } from '@mui/material';
import React from 'react';

const Input = ({
  name,
  hadelChange,
  label,
  type,
  autoFocus,
  handelShowPassword,
  half,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={hadelChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === 'password' && {
            endAdornment: (
              <IconButton onClick={handelShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
