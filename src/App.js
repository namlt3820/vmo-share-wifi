import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LayoutMain from './layout/LayoutMain';
import LayoutDashboard from './layout/LayoutDashboard';

// import './App.css';
import { routersAuth, routesDashboard } from './routers/index';
import { getCurrentUser } from './store/actions/user';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(getCurrentUser());
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {routesDashboard.map(router => (
              <AppRoute
                exact
                path={router.path}
                layout={LayoutDashboard}
                component={router.component}
                key={router.id}
              />
            ))}
          </Switch>
          <Switch>
            {routersAuth.map(router => (
              <AppRoute
                exact
                path={router.path}
                layout={LayoutMain}
                component={router.component}
                key={router.id}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
