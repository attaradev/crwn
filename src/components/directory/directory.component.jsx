import React from 'react';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  sections: state.directory.sections
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