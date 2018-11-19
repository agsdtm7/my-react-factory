import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavResponsive from './layout/TopNavResponsive';
import './App.css';
import Home from './layout/Home';
import About from './layout/About';
import Service from './layout/Service';
import Contact from './layout/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavResponsive totalmenu='4' brand='a' />
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
