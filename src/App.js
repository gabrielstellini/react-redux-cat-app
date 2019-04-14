import React, { Component } from 'react';
import './App.scss';
import CatFact from "./cat-fact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatFact/>
      </div>
    );
  }
}

export default App;
