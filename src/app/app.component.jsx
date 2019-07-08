import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.style.scss';
import { Header } from '../components/header/header.component';
import { Homepage } from '../pages/homepage/homepage.component';
import { ShopPage } from '../pages/shop/shop.component';
import { ContactPage } from '../pages/contact/contact.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { SignUpPage } from '../pages/sign-up/sign-up.component';
import { auth } from '../utils/firebase.utils';
import { Footer } from '../components/footer/footer.component';


export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        this.setState({ currentUser: user });

        console.log(user);
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={SignInPage} />
          <Route path='/register' component={SignUpPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
};
