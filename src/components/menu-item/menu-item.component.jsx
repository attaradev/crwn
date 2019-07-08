import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({ title, image }) => (
  <div className='menu-item'>
    <div className='background-image' style={{ backgroundImage: `url(${image})` }}>

    </div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
);