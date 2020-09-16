import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound  from '../layout/NotFound';
import Register from '../auth/register';
import Login from '../auth/login';
import Alert from '../layout/Alert';

export const Routes = props => {
    return (
        <section className="container">
          <Alert/>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/profiles" component={Profiles}/>
            <Route path="/profile/:id" component={Profile}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/create-profile" component={CreateProfile}/>
            <PrivateRoute path="/edit-profile" component={EditProfile}/>           
            <PrivateRoute path="/add-experience" component={AddExperience}/>
            <PrivateRoute path="/add-education" component={AddEducation}/>
            <PrivateRoute path="/posts" component={Posts}/> 
            <PrivateRoute path="/post/:id" component={Post}/>
            <Route component={NotFound}></Route> 
          </Switch>
        </section>
    );
};

