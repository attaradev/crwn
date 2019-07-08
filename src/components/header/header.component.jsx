import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const Header = () => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <nav className='navigation'>
      <Link className='navigation-link' to='/shop'>Shop</Link>
      <Link className='navigation-link' to='/contact'>Contact</Link>
    </nav>
  </header>
);