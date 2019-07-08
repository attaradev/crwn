import React from 'react'
import { Link } from 'react-router-dom';
import './footer.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Footer = () => (
  <footer className='footer'>
    <p className='credit'>
      &copy; 2019 | <Link>CRWN, Inc</Link>
    </p>
  </footer>
);