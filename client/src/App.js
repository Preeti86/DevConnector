import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Landing from './components/layout/Landing';
import './App.css';
import Alert from './components/layout/alert';

const App = () => (
  <Provider store={store}>
    <Router>
    <Fragment>
    <Navbar/>
    <Route exact path='/' component={Landing}/>
    <Alert/>
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>

      </Switch>
    </section>
  </Fragment>
  </Router> 
  </Provider>
);

export default App;
