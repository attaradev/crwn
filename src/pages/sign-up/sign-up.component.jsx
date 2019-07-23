import React, { useState } from 'react';
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

export const SignUpPage = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      alert(`Passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });

      setState(INITIAL_STATE);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>Sign in to your account</h2>
      <span>Sign up with your email and password</span>
      <form className='form' onSubmit={handleSubmit}>
        <span>Already have an account? <Link to='/login'>Sign in</Link></span>

        <FormInput
          type='text'
          name='displayName'
          value={state.displayName}
          label='name'
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={state.email}
          label='email'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={state.password}
          label='password'
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={state.confirmPassword}
          label='confirm password'
          onChange={handleChange}
          required
        />
        <Button style={{ width: '100%' }} type='submit'>Sign up</Button>
      </form>
    </div>
  );
}