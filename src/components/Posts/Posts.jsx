import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

// Component
import Post from './Post/Post';

// Metarial UI Styles
import useStyles from './styles';
const Posts = ({setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector(state => state.posts);


  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignContent="stretch"
      spacing={2}
    >
      {posts.map(post => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
