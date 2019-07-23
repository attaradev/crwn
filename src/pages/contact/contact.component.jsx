import React from 'react';
import './contact.styles.scss';
import { FormInput } from '../../components/form-input/form-input.component';
import { Button } from '../../components/button/button.component';

const INITIAL_STATE = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

export const ContactPage = () => {
  const [state, setState] = React.useState(INITIAL_STATE);

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setState(INITIAL_STATE);
  }

  return (
    <div className='contact'>
      <h2 className='title'>Contact us</h2>
      <span>We do our best to respond as soon as possible.</span>
      <form className='form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          value={state.name}
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
          type='text'
          name='subject'
          value={state.subject}
          label='subject'
          onChange={handleChange}
          required
        />
        <div className='input-group'>
          <label
            htmlFor='message'
            className={`${state.message.length ? 'shrink ' : ''}form-input-label`}>
            Message
          </label>
          <textarea
            name='message'
            value={state.message}
            onChange={handleChange}
          />
        </div>
        <Button style={{ width: '100%' }} type='submit'>Send message</Button>
      </form>
    </div>
  );
}