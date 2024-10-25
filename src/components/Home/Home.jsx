import React, { useState } from 'react';
import { Container, Grow, Grid } from '@mui/material';

// Import Component 
import Posts from '../Posts/Posts';
import Form from '../Form/Form';


// Metarial UI Styles 
import useStyles from './styles';

//React Redux 
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../actions/posts';



const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing="1"
        >
          <Grid item xs={12} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
