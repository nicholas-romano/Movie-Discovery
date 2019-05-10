import React, { Component } from 'react';
import MovieResults from './MovieResults';
import MovieLikesList from './MovieLikesList';

import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="container">
          <div className="jumbotron text-center">
            <h1 className="display-4">Movie Discovery</h1>
            <p className="lead">Find your movies <i>Fast!</i></p>
          </div>
          <div>
            <Router>
              <Switch>
                <Route exact path='/' component={MovieResults} />
                <Route path='/fav' component={MovieLikesList} />
              </Switch>
            </Router>

          </div>
      </div>
    );
  }
}

export default App;
