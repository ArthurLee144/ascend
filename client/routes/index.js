import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Main from './Main';
import Create from './Create';
import Profile from './Profile';
import Details from './Details';
import Search from './Search';
import Review from './Review';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/createasite" component={Create} />
      <Route path="/profile" component={Profile} />
      <Route path="/landing" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/details" component={Details} />
      <Route path="/search" component={Search} />
      <Route path="/writeareview" component={Review} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </Router>
);
