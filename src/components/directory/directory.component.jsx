import React from 'react';
import { connect } from 'react-redux';
import { MenuItem } from '../menu-item/menu-item.component';
import { selectSections } from './../../redux/directory/directory.selectors';
import './directory.styles.scss';

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export const Directory = connect(mapStateToProps)(
  ({ sections }) => (
    <section className='directory-menu'>
      {
        sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
      }
    </section>
  )
);