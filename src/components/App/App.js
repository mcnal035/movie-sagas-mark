import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { lightBlue, cyan, red } from '@material-ui/core/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

//Routes
import MovieGallery from '../MovieGallery/MovieGallery'
import MovieDetails from '../MovieDetails/MovieDetails'
import EditPage from '../EditPage/EditPage';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: cyan,
    error: red,
  }
});

class App extends Component {

  // Renders the entire app on the DOM and it is where the routes are made.
  render() {
    return (
        <>
        <MuiThemeProvider theme={theme}>
      <Router>
      <div className="App">
       
        <Route exact path="/" render={(props) => <MovieGallery {...props} isAuthed={true}/>}/>
        <Route path="/details" component={MovieDetails} />
        <Route path="/edit" component={EditPage} />
      </div>
      </Router>
      </MuiThemeProvider>
        </>
    );
   
  }
}

export default connect()(App);
