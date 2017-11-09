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
import Results from './Results';
import Review from './Review';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/create" component={Create} />
      <Route path="/profile" component={Profile} />
      <Route path="/landing" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/details" component={Details} />
      <Route path="/results" component={Results} />
      <Route path="/review" component={Review} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </Router>
);
