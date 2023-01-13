import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../Common';

import './styles.css';

export const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <Button
        type='primary'
        classes='toggle-menu'
        handleClick={() => setShowNav((prev) => !prev)}
      >
        <img src='/assets/images/hamburger.svg' alt='hamburger menu' />
      </Button>

      <ul className={`nav-list flex ${showNav && 'active'}`}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/menu'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/booking'>Reservations</NavLink>
        </li>
        <li>
          <NavLink to='/order'>Order Online</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
