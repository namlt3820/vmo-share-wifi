import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import routers from './routers/index';

const AppRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} />} />
);

function App() {
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

export default App;
