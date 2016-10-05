import React from 'react';
import { Segment } from 'semantic-ui-react';

export const Index = () => (
  <Segment padded>
    <h2>Base</h2>
    <p>A starting point for Meteor applications.</p>
    <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
    <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.7.0</p>
  </Segment>
);
