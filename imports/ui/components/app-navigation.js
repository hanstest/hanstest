import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import { PublicNavigation } from './public-navigation';
import { AuthenticatedNavigation } from './authenticated-navigation';

export class AppNavigation extends React.Component {
  renderNavigation(hasUser) {
    return hasUser ? <AuthenticatedNavigation /> : <PublicNavigation />;
  }

  render() {
    return <Menu>
        <Menu.Item>
          <Link to="/">Han's</Link>
        </Menu.Item>
      <Segment>
        { this.renderNavigation(this.props.hasUser) }
      </Segment>
    </Menu>;
  }
}

AppNavigation.propTypes = {
  hasUser: React.PropTypes.object,
};
