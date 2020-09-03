import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/profile/Profile';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import Register from './components/auth/register';
import Login from './components/auth/login';
import { LOGOUT } from './actions/types';
import Landing from './components/layout/Landing';
import './App.css';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
  <Provider store={store}>
    <Router>
    <Fragment>
    <Navbar/>
    <Route exact path='/' component={Landing}/>
    <section className="container">
    <Alert/>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/create-profile" component={CreateProfile}/>
        <PrivateRoute path="/edit-profile" component={EditProfile}/>
        <Route path="/profiles" component={Profiles}/>
        <PrivateRoute path="/profile/:id" component={Profile}/>
        <PrivateRoute path="/add-experience" component={AddExperience}/>
        <PrivateRoute path="/add-education" component={AddEducation}/> 
      </Switch>
    </section>
  </Fragment>
  </Router> 
  </Provider>
)};

export default App;
