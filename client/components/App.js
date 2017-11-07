import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Landing from './Landing';
import Login from './Login';
import Main from './Main';
import Results from './Results';
import Review from './Review';
import Details from './Details';
import Create from './Create';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Main</Link></li>
            <li><Link to='/results'>Results</Link></li>
            <li><Link to='/review'>Reviews</Link></li>
            <li><Link to='/details'>Details</Link></li>
            <li><Link to='/create'>Create</Link></li>
          </ul>

          <Route path="/" component={Main}/>
          <Route path="/results" component={Results}/>
          <Route path="/review" component={Review}/>
          <Route path="/details" component={Details}/>
          <Route path="/create" component={Create}/>
        </div>
      </Router>
    )
  }
}
