import React from 'react';
import { Link } from 'react-router-dom';
import './sign-up.styles.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';
import { auth, createUserProfileDocument } from '../../utils/firebase.utils';

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export class SignUpPage extends React.Component {
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
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      this.setState(INITIAL_STATE);
    } catch (error) {
      console.error('Unable to register user:', error.message);
    }
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>Sign in to your account</h2>
        <span>Sign up with your email and password</span>
        <form className='form' onSubmit={this.handleSubmit}>
          <span>Already have an account? <Link to='/login'>Sign in</Link></span>

          <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            label='name'
            onChange={this.handleChange}
            required
          />
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
          <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            label='confirm password'
            onChange={this.handleChange}
            required
          />
          <Button style={{ width: '100%' }} type='submit'>Sign up</Button>
        </form>
      </div>
    );
  }
}