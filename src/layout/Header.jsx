import { Stack, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        marginTop: '30px',
      }}
    >
      <Stack
        direction="row"
        useFlexGap
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',

              gap: '0.3rem',
            }}
          >
            <img
              src="./src/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Typography
              variant="h5"
              color="#3878E4"
              fontWeight="600"
            >
              MEMORIES
            </Typography>
          </Link>
        </div>
        <Navbar />
      </Stack>
    </header>
  );
}

export default Header;
