import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Nav from './Nav';
import Main from './Main';
import Create from './Create';
import Profile from './Profile';
// import Landing from './Landing';
// import Login from './Login';
// import Results from './Results';
// import Review from './Review';
// import Details from './Details';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;


// export default class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav />
//           <Route exact path="/" component={Main} />
//           <Route path="/create" component={Create} />
//           <Route path="/profile" component={Profile} />
//         </div>
//       </Router>
//     );
//   }
// }
