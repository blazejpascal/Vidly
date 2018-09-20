import React, { Component } from 'react';
import './App.css';
import MoviesTable from './components/Movies/Movies'

class App extends Component {
  render() {
    return (
      <main className="container">
          <MoviesTable/>
      </main>

    );
  }
}

export default App;
