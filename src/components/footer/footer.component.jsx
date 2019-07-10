import React from 'react'
import { Link } from 'react-router-dom';
import './footer.styles.scss';

export const Footer = () => (
  <footer className='footer'>
    <p className='credit'>
      &copy; 2019 | <Link to='/'>CRWN, Inc</Link>
    </p>
  </footer>
);