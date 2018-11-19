import React, { Component } from 'react';
import TopNavResponsive from './layout/TopNavResponsive';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopNavResponsive bgColor='#928ABF' txtColor='white' mn3='Products' mnhref3='#products' />
        <TopNavResponsive totalmenu='3' bgColor='#928ABF' txtColor='white' mn3='service' mnhref3='#service' />
        <TopNavResponsive totalmenu='3' brand='a' />

        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

          </header>
        </div>
      </div>
    );
  }
}

export default App;
