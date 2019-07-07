import React from 'react';
import { MenuItem } from '../menu-item/menu-item.component';

const items = [{ id: 1, title: 'Hats' }, { id: 2, title: 'Jackets' }, { id: 3, title: 'Sneakers' }, { id: 4, title: "Men's" }, { id: 5, title: "Women's" }];

export const Homepage = () => (
  <div className='homepage'>
    <div className='directory-manu'>
      {items.map(item => <MenuItem key={item.id} title={item.title} />)}
    </div>
  </div>
);