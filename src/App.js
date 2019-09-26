import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LayoutMain from './layout/LayoutMain';
import LayoutDashboard from './layout/LayoutDashboard';
import LayoutLanding from './layout/LayoutLanding';
// import './App.css';
import { routersAuth, routesDashboard, routesLanding } from './routers/index';
import { getCurrentUser } from './store/actions/user';
import Loading from './components/core/Loading';

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
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch(getCurrentUser());
    }
    this.getUser();
  }

  getUser = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;
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
            {loading ? (
              <Loading />
            ) : (
              routersAuth.map(router => (
                <AppRoute
                  exact
                  path={router.path}
                  layout={LayoutMain}
                  component={router.component}
                  key={router.id}
                />
              ))
            )}
          </Switch>
          <Switch>
            {routesLanding.map(router => (
              <AppRoute
                exact
                path={router.path}
                layout={LayoutLanding}
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

const mapStateToProp = state => ({
  user: state.users
});

export default connect(mapStateToProp)(App);
