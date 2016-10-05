import React from 'react';
import { Menu } from 'semantic-ui-react';

export const PublicNavigation = () => (
  <Menu position='right'>
    <Menu.Item name='signup' onClick={this.handleItemClick} />
    <Menu.Item name='login' onClick={this.handleItemClick} />
  </Menu>
);
