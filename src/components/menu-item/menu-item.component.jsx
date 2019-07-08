import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

export const MenuItem = withRouter(({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={size === undefined ? 'menu-item' : `${size} menu-item`} onClick={() => { history.push(`${match.url + linkUrl}`) }} >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>

    </div>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>Shop now</span>
    </div>
  </div >
));