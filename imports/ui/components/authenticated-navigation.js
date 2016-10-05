import React from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Icon, Dropdown } from 'semantic-ui-react';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const name = user && user.profile ? user.profile.name : '';
  return user ? `${name.first} ${name.last}` : '';
};

const trigger = (
  <span>
    <Icon name='user' />
    Hello, Bob
  </span>
)

export const AuthenticatedNavigation = () => (
  <Dropdown trigger={trigger}>
    <Dropdown.Menu>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign Out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);
