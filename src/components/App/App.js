import React, { Component } from 'react';
import './App.css';
import MovieGallery from '../MovieGallery/MovieGallery'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
        <MovieGallery />
      </div>
    );
  }
}

export default App;
