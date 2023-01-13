import { NavLink } from 'react-router-dom';

import './styles.css';

export const Nav = () => (
  <nav>
    <ul className='nav-list flex'>
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
