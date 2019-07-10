import React from 'react';
import { Link } from 'react-router-dom';
import './sign-in.styles.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';
import { signInWithGoogle, auth } from '../../utils/firebase.utils';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export class SignInPage extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = this.state;
      await auth.signInWithEmailAndPassword(email, password);
      this.setState(INITIAL_STATE);
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>Sign in to your account</h2>
        <span>Sign in with your email and password</span>
        <form className='form' onSubmit={this.handleSubmit}>
          <span>Don't have an account? <Link to='/register'>Sign up</Link></span>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            label='email'
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            label='password'
            onChange={this.handleChange}
            required
          />
          <div className='btn-group'>
            <Button type='submit'>Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleBtn={true}>Sign in with google</Button>
          </div>
        </form>
      </div>
    );
  }
}