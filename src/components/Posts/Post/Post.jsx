import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

// Metarial UI Styles
import useStyles from './styles';
import moment from 'moment/moment';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handelDelete = id => {
    dispatch(deletePost(id));
  };

  const handelLike = id => {
    dispatch(likePost(id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.seletedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {post.tags.map(tag => `#${tag} `)}
          </Typography>
        </div>

        <CardContent>
          <Typography className={classes.title} variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handelLike(post._id);
            }}
          >
            <ThumbUpAlt fontSize="small" />
            &nbsp; Like &nbsp;
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              handelDelete(post._id);
            }}
          >
            <Delete fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Post;
