import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sign-in.styles.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';
import { signInWithGoogle, auth } from '../../utils/firebase.utils';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export const SignInPage = () => {

  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = state;
      await auth.signInWithEmailAndPassword(email, password);
      setState(INITIAL_STATE);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>Sign in to your account</h2>
      <span>Sign in with your email and password</span>
      <form className='form' onSubmit={handleSubmit}>
        <span>Don't have an account? <Link to='/register'>Sign up</Link></span>
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
        <div className='btn-group'>
          <Button type='submit'>Sign in</Button>
          <Button isGoogleBtn onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
      </form>
    </div>
  );

}