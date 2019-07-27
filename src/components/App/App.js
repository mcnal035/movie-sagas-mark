import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Routes
import MovieGallery from '../MovieGallery/MovieGallery'
import MovieDetails from '../MovieDetails/MovieDetails'
import EditPage from '../EditPage/EditPage';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <>
      <Router>
      <div className="App">
       
        <Route exact path="/" render={(props) => <MovieGallery {...props} isAuthed={true}/>}/>
        <Route path="/details" component={MovieDetails} />
        <Route path="/edit" component={EditPage} />
      </div>
      </Router>
        </>
    );
   
  }
}

export default connect()(App);
