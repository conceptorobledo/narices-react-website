import React, { Component } from 'react';
import Header from './components/Layout/Header';
import PodcastList from './components/Layout/PodcastList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
