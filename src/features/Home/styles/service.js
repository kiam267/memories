import { makeStyles } from '@mui/styles';

export default makeStyles(theme => ({
  gridImage: {
    width: '100%',
    height: '300px',
    objectFit: "contain"
  },
  [theme.breakpoints.down('xl')]: {
    imageArrow: {
      top: '-10px',
      right: '0px',
    },
  },
}));
