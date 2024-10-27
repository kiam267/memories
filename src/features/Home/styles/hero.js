import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    width: '100%',
  },
  text: {
    color: 'transparent',
    backgroundImage:
      'linear-gradient(to right, #93c5fd, #1e3a8a)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    textAlign: 'center',
  },
  image: {
    marginLeft: '15px',
  },

  imageBody: {
    position: 'relative',
    marginTop: '60px',
  },

  imageArrow: {
    position: 'absolute',
    // width: '150px',
    // height: '150px',
    width: '20%',
    top: '5%',
    // right: '-18%',
    right: '-26%',
    transform: 'translate(-50%, -50%) rotate(-11deg)',
  },
  [theme.breakpoints.down('xl')]: {
    imageArrow: {
      top: '-10px',
      right: '0px',
    },
  },
  [theme.breakpoints.down('md')]: {
    imageArrow: {
      display: 'none',
    },
  },
}));
