import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartIcon } from './../cart-icon/cart-icon.component';
import { CartDropdown } from './../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {
  HeaderContainer,
  NavigationContainer,
  LogoContainer,
  NavigationLink
} from './header.styles';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export const Header = connect(mapStateToProps)(({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <NavigationContainer>
      <NavigationLink to='/shop'>Shop</NavigationLink>
      <NavigationLink to='/contact'>Contact</NavigationLink>
      {
        currentUser === null
          ? <NavigationLink to='/login'>Sign in</NavigationLink>
          : <NavigationLink as='div' onClick={() => auth.signOut()}>Sign out</NavigationLink>
      }
      <CartIcon />
    </NavigationContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
));
