import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  // Renders the entire app on the DOM

handleSubmit = () =>{
    console.log('clicked Edit');
    this.props.history.push('/edit');
}

backButton = () =>{
    console.log('clicked back')
    this.props.history.push('/');
}

  render() {
    console.log (this.props.reduxStore.setDescription)
    let item = this.props.reduxStore.setDescription
    return (
        <>
    <button onClick={this.backButton}>Back</button>
    <button onClick={this.handleSubmit}>Edit</button>
      
    <div className="App">
        <p>Details</p>
        <p>Title: {item.title}</p>
       <p>Genre: {item.name}</p>
        <p>Description: {item.description}<br/></p>
    </div>
     </>
    );
   
  }
}

const putReduxStoreOnProps = (reduxStore) =>({
  reduxStore
})

export default connect(putReduxStoreOnProps)(MovieDetails);
