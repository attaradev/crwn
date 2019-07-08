import React, { Component } from 'react';
import './directory.styles.scss';
import { MenuItem } from '../menu-item/menu-item.component';
import { sections } from './directory.data';

export class Directory extends Component {
  state = { sections }

  render() {
    return (
      <header className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id }) => <MenuItem key={id} title={title} image={imageUrl} />)}
      </header>
    );
  }
}