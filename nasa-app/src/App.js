import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './routes/Home/Home';
import NotFound from './routes/NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main role="main" className="App">
          <h1 className="siimple-h1">Astronomy Picture of the Day</h1>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/(\d{4}-\d{2}-\d{2})" component={Home}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
