import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MenuItem } from '../menu-item/menu-item.component';
import { selectSections } from './../../redux/directory/directory.selectors';


const DirectoryContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const mapStateToProps = state => ({
  sections: selectSections(state)
});

export const Directory = connect(mapStateToProps)(
  ({ sections }) => (
    <DirectoryContainer>
      {
        sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)
      }
    </DirectoryContainer>
  )
);