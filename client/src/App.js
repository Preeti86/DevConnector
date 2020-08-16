import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Landing from './components/layout/Landing';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
    <Navbar/>
    <Route exact path='/' component={Landing}/>
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>

      </Switch>
    </section>
  </Fragment>
  </Router> 
);

export default App;
