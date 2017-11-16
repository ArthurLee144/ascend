import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import Search from './Search';
import Details from './Details';
import Review from './Review';
import Create from './Create';
import Profile from './Profile';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={Search} />
      <Route path="/details" component={Details} />
      <Route path="/writeareview" component={Review} />
      <Route path="/createasite" component={Create} />
      <Route path="/profile" component={Profile} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </Router>
);
