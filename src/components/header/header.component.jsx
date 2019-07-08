import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase.utils';

export const Header = ({ user }) => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <nav className='navigation'>
      <Link className='navigation-link' to='/shop'>Shop</Link>
      <Link className='navigation-link' to='/contact'>Contact</Link>
      {
        user === null
          ? <Link className='navigation-link' to='/login'>Sign in</Link>
          : <div className='navigation-link' onClick={() => auth.signOut()}>Sign out</div>
      }
    </nav>
  </header>
);