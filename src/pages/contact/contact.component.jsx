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

export class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div className='contact'>
        <h2 className='title'>Contact us</h2>
        <span>We do our best to respond as soon as possible.</span>
        <form className='form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={this.state.name}
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
            type='text'
            name='subject'
            value={this.state.subject}
            label='subject'
            onChange={this.handleChange}
            required
          />
          <div className='input-group'>
            <label
              htmlFor='message'
              className={`${this.state.message.length ? 'shrink ' : ''}form-input-label`}>
              Message
            </label>
            <textarea
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
          <Button style={{ width: '100%' }} type='submit'>Send message</Button>
        </form>
      </div>
    );
  }
}