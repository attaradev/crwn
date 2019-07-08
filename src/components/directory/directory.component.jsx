import React, { Component } from 'react';
import './directory.styles.scss';
import { MenuItem } from '../menu-item/menu-item.component';
import { sections } from '../../data';

export class Directory extends Component {
  state = { sections }

  render() {
    return (
      <section className='directory-menu'>
        {this.state.sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)}
      </section>
    );
  }
}