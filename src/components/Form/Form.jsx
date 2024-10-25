import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

// Redux Actions
import { createPost, updatePost } from '../../actions/posts';

//Metarial UI Styles
import useStyles from './styles';
import { useEffect, useState } from 'react';

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    seletedFile: '',
  });
  const post = useSelector(state =>
    currentId ? state.posts.find(post => post._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  const classes = useStyles();

  // Form Submit
  const handelSubmit = e => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handelClear();
  };

  // Clear form
  const handelClear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      seletedFile: '',
    });
  };

  return (
    <Paper className={`${classes.paper}`}>
      <form
        className={` ${classes.root} ${classes.form}`}
        autoComplete="off"
        noValidate
        onSubmit={handelSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing ' : 'Creating'} a Memory{' '}
        </Typography>

        <TextField
          name="Creator"
          label="Creator"
          variant="outlined"
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
          fullWidth
        />
        <TextField
          name="Title"
          label="Title"
          variant="outlined"
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
          fullWidth
        />
        <TextField
          name="Message"
          label="Message"
          variant="outlined"
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
          fullWidth
        />
        <TextField
          name="Tags"
          label="Tags"
          variant="outlined"
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(",") })}
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, seletedFile: base64 })
            }
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.buttonSubmit}
          fullWidth
        >
          Submit
        </Button>
        <Button
          className="mt-3"
          onClick={handelClear}
          variant="contained"
          color="secondary"
          fullWidth
          size="small"
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
