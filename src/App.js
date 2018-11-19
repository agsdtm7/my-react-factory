import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavResponsive from './layout/TopNavResponsive';
import './App.css';
import Home from './layout/home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNavResponsive totalmenu='4' brand='a' />
          <div className="App">
            <header className="App-header">
              <Route exact path="/" component={Home} />
            </header>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
