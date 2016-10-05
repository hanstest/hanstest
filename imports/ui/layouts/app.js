import React, {PropTypes} from 'react'
import {Grid} from 'semantic-ui-react';
import AppNavigation from '../containers/app-navigation';

const App = () => (
  <div>
    <AppNavigation />
    <Grid padded>
      { this.props.children }
    </Grid>
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};
