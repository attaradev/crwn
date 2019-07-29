import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';
import { signInWithGoogle, signInWithEmail } from '../../redux/user/user.actions';
import { SignInContainer, Title, ButtonGroup } from './sign-in.styles';


const INITIAL_STATE = {
  email: '',
  password: ''
};

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  signInWithEmail: emailAndPassword => dispatch(signInWithEmail(emailAndPassword))
});

export const SignInPage = connect(
  null,
  mapDispatchToProps
)(
  ({ signInWithGoogle, signInWithEmail }) => {

    const [state, setState] = useState(INITIAL_STATE);

    const handleChange = event => {
      const { name, value } = event.target;
      setState({ ...state, [name]: value });
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      signInWithEmail(state);
      setState(INITIAL_STATE);
    }

    return (
      <SignInContainer>
        <Title as='h1'>Sign in to your account</Title>
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
          <ButtonGroup>
            <Button type='submit'>Sign in</Button>
            <Button
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign in with google
          </Button>
          </ButtonGroup>
        </form>
      </SignInContainer>
    );
  })