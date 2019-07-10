import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.style.scss';
import { Header } from '../components/header/header.component';
import { Homepage } from '../pages/homepage/homepage.component';
import { ShopPage } from '../pages/shop/shop.component';
import { ContactPage } from '../pages/contact/contact.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { SignUpPage } from '../pages/sign-up/sign-up.component';
import { Footer } from '../components/footer/footer.component';
import { auth, createUserProfileDocument } from '../utils/firebase.utils';


export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async authicatedUser => {
        if (authicatedUser) {
          const userReference = await createUserProfileDocument(authicatedUser);
          userReference.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
          });
        };

        this.setState({ currentUser: null });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
