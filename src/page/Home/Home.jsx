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

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    // <Grow in>
    //   <Container>

    //     {/* <Grid
    //       className={classes.mainContainer}
    //       container
    //       justifyContent="space-between"
    //       alignItems="stretch"
    //       spacing="1"
    //     >
    //       <Grid item xs={12} sm={6}>
    //         <Posts setCurrentId={setCurrentId} />
    //       </Grid>
    //       <Grid item xs={12} sm={5}>
    //         <Form currentId={currentId} setCurrentId={setCurrentId} />
    //       </Grid>
    //     </Grid> */}
    //   </Container>
    // </Grow>

    <main>
      <Hero />
    </main>
  );
};

export default Home;
