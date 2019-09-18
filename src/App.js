import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import routers from './routers/index';
import { getCurrentUser } from './store/actions/user';

const AppRoute = ({ component: Components, ...rest }) => (
  <Route {...rest} render={props => <Components {...props} />} />
);

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (window.localStorage.access_token) {
      dispatch(getCurrentUser());
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {routers.map(router => (
              <AppRoute
                exact
                path={router.path}
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
