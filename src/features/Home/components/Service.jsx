import {
  Box,
  Grid2,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

import useStyles from '../styles/service';
import { services } from '../../../constants';
import { Button } from '../../../components/ui/Buttton';
import { Link } from 'react-router-dom';
import GridLayout from 'react-grid-layout';

function Service() {
  const classes = useStyles();

  return (
    <Box component="div" marginTop={20}>
      <Box component="div" aligndivs="center">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#333333',
            textAlign: 'center',
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'gray',
            textAlign: 'center',
          }}
        >
          We focus on our valued customers, and I am always
          ready to assist them.
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid2
          container
          gap={5}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            [useTheme().breakpoints.down('lg')]: {
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
            },
            [useTheme().breakpoints.down('md')]: {
              gridTemplateColumns: '1fr',
              // gap: ' 60px 30px',
            },
            marginY: '6rem',
          }}
        >
          {services.map(item => (
            <Grid2
              key={item.id}
              sx={{
                [useTheme().breakpoints.up('xl')]: {
                  ...item?.style,
                  marginTop: '25px',
                },
              }}
            >
              <Box
                component="div"
                sx={{
                  border: '1px dashed black',
                  borderRadius: '20px',
                  padding: '15px',
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <Box component="div">
                  <img
                    className={classes.gridImage}
                    src={item.image}
                    alt={item.title}
                  />
                </Box>

                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#333333',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'gray',
                    }}
                  >
                    {item.description}
                  </Typography>
                  {item.id === 3 && (
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'gray',
                        marginTop: '20px',
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                  {item.id === 3 && (
                    <Box component="div">
                      <Link to="/auth">
                        <Button
                          sx={{
                            width: '100%',
                            margin: '20px 0pc',
                          }}
                        >
                          Start Now
                        </Button>
                      </Link>
                    </Box>
                  )}
                </Box>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default Service;
