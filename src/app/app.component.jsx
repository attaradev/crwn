import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { Header } from '../components/header/header.component';
import { HomePage } from '../pages/homepage/homepage.component';
import { ShopPage } from '../pages/shop/shop.component';
import { ContactPage } from '../pages/contact/contact.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { SignUpPage } from '../pages/sign-up/sign-up.component';
import { CheckoutPage } from '../pages/checkout/checkout.component';
import { Footer } from '../components/footer/footer.component';
import { auth, createUserProfileDocument } from '../utils/firebase.utils';
import { setCurrentUser } from '../redux/user/user.actions';
import { selectCurrentUser } from '../redux/user/user.selectors';


const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
`;


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async authicatedUser => {
        if (authicatedUser) {
          const userReference = await createUserProfileDocument(authicatedUser);
          userReference.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        };

        setCurrentUser(null);
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route
            path='/checkout'
            render={() => currentUser !== null
              ? <CheckoutPage />
              : <Redirect to='/login' />}

          />
          <Route
            exact
            path='/login'
            render={() => currentUser === null
              ? <SignInPage />
              : <Redirect to='/' />
            }
          />
          <Route
            exact
            path='/register'
            render={() => currentUser === null
              ? <SignUpPage />
              : <Redirect to='/' />
            }
          />
        </Switch>
        <Footer />
      </AppContainer>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
