import {
  AppBar,
  Avatar,
  Button,
  Container,
  Drawer,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Metarial UI Styles
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { navLink } from '../../constants';
import { pink } from '@mui/material/colors';
import DashboardLayoutBasic from './Mobile';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );
  const [activeLink, setActiveLink] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const userData = useSelector(
    state => state.auth.authData
  );

  const handleClick = id => {
    setActiveLink(id);
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);
  };

  const handleEvent = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (userData) {
      setUser(userData);
      navigate('/');
    }
  }, [userData, navigate]);
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setDrawer(newOpen);
  };
  return (
    <div className={classes.appBar}>
      {/* <div className="">
        <Button onClick={toggleDrawer(true)}>
          Open drawer
        </Button>
        <Drawer open={drawer} onClose={toggleDrawer(false)}>
          "kdfoisd"
        </Drawer>
      </div> */}
      {/* <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '50px',
          }}
        >
          {navLink.map(item => (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => handleClick(item.id)}
                style={{
                  fontSize: '20px',
                  color:
                    activeLink === item.id
                      ? '#3878E4'
                      : 'black',
                  fontWeight: 'bold',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e =>
                  (e.target.style.color = '#3878E4')
                }
                onMouseLeave={e =>
                  (e.target.style.color =
                    activeLink === item.id
                      ? '#3878E4'
                      : 'black')
                }
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <div className={classes.user}>
              <Button
                id="basic-button"
                aria-controls={
                  open ? 'basic-menu' : undefined
                }
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleEvent}
              >
                <Avatar
                  className={classes.purple}
                  alt={user.user.name}
                  src={user.user.picture}
                  sx={{
                    bgcolor: pink[400],
                  }}
                >
                  {user.user.name.charAt(0)}
                </Avatar>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                style={{
                  width: '200px',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography
                    className={classes.title}
                    variant="h6"
                    align="center"
                    style={{
                      width: '200px',
                    }}
                  >
                    {user.user.name}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button
                    style={{
                      width: '200px',
                    }}
                    variant="contained"
                    className={classes.logout}
                    color="primary"
                    onClick={logout}
                    startIcon={<LogoutIcon />}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
        ) : (
          <>
            <Button
              href="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </>
        )}
      </Toolbar>
    </div>
  );
};

export default Navbar;
