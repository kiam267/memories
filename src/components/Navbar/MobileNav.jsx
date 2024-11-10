import { Drawer } from '@mui/material';
import React from 'react';
import { Button } from '../ui/Buttton';
import { navLink } from '../../constants';
import { Link } from 'react-router-dom';

function MobileNav({ handleClick, activeLink }) {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setDrawer(newOpen);
  };
  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <img src="src/assets/icons/menu.png" alt="menu" />
      </button>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer(false)}
      >
        <nav>
          <ul
            style={{
              // display: 'flex',
              // justifyContent: 'space-between',
              // gap: '50px',
              padding: '30px',

              width: '200px',
            }}
          >
            {navLink.map(item => (
              <li
                key={item.id}
                style={{
                  padding: '10px 0px',
                }}
              >
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
        </nav>
      </Drawer>
    </div>
  );
}

export default MobileNav;
