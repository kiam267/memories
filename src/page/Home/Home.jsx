import React, { useState } from 'react';

// Import Component
// import Posts from '../Posts/Posts';
// import Form from '../Form/Form';

// Metarial UI Styles

//React Redux
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from '../../actions/posts';

import Hero from '../../features/Home/components/Hero';
import Service from '../../features/Home/components/Service';
import { Container, Grid } from '@mui/material';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <main>
      <Container
        maxWidth="lg"
      >
        <Hero />
        <Service />
      </Container>
    </main>
  );
};

export default Home;
