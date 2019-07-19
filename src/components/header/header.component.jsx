import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { CartIcon } from './../cart-icon/cart-icon.component';
import { CartDropdown } from './../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import './header.styles.scss';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export const Header = connect(mapStateToProps)(({ currentUser, hidden }) => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <nav className='navigation'>
      <Link className='navigation-link' to='/shop'>Shop</Link>
      <Link className='navigation-link' to='/contact'>Contact</Link>
      {
        currentUser === null
          ? <Link className='navigation-link' to='/login'>Sign in</Link>
          : <div className='navigation-link' onClick={() => auth.signOut()}>Sign out</div>
      }
      <CartIcon />
    </nav>
    {hidden ? null : <CartDropdown />}
  </header>
));
