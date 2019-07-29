import React, { Component } from 'react';

    
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 18,
    },
    myFormStuff: {
      width: '80%',
      margin: 'auto'
    }
  });

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
    <div className="App">
        <h2>Details</h2>
        <p>Title: {item.title}</p>
       <p>Genre: {item.name}</p>
        <p> {item.description}<br/></p>
    </div>
    <Button onClick={this.backButton}>Back</Button>
    <Button onClick={this.handleSubmit}>Edit</Button>
     </>
    );
   
  }
}

const putReduxStoreOnProps = (reduxStore) =>({
  reduxStore
})

export default withStyles(styles)(connect(putReduxStoreOnProps)(MovieDetails));
