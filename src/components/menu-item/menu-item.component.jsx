import React from 'react';
import './menu-item.style.scss';

export const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>Shop now</span>
    </div>
  </div>
);