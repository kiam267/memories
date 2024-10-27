import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

export const Button = styled(MuiButton)(({ theme }) => ({
  appearance: 'button',
  backgroundColor: '#000',
  backgroundImage: 'none',
  border: '1px solid #000',
  borderRadius: '4px',
  boxShadow: '#fff 4px 4px 0 0, #000 4px 4px 0 1px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '30px',
  padding: '12px 40px',
  textAlign: 'center',
  textTransform: 'none',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  whiteSpace: 'nowrap',
  transition: 'transform 0.2s ease',

  '&:focus': {
    textDecoration: 'none',
  },
  '&:hover': {
    textDecoration: 'none',
  },
  '&:active': {
    boxShadow: 'rgba(0, 0, 0, 0.125) 0 3px 5px inset',
    outline: '0',
  },
  '&:not([disabled]):active': {
    boxShadow: '#fff 2px 2px 0 0, #000 2px 2px 0 1px',
    transform: 'translate(2px, 2px)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '12px 50px',
  },
}));
