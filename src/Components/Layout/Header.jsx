import { Nav } from './Nav';

import './styles.css';

export const Header = () => (
  <header>
    <div className='container'>
      <div className='header-content flex'>
        <img src='assets/images/Logo.svg' alt='little lemon logo' />

        <Nav />
      </div>
    </div>
  </header>
);
