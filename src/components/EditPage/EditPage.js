import React, { Component } from 'react';


import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    textArea: {
        marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "100%",
    },
    button: {
      margin: theme.spacing.unit,
    },
   
    myFormStuff: {
      width: '80%',
      margin: 'auto'
    }
  });

class EditPage extends Component {
    
  state = {
      newDetails: {    
      title: '',
      description: '',
  
    }
  }
// grbas teh new edits and sets the state.
handleChange = (event, propToChange) => {
    this.setState({
        newDetails: {
           id: this.props.reduxStore.setDescription.id,
        ...this.state.newDetails,
        [propToChange]: event.target.value,
        }
    })
}
 
// sends the updates to the reducer and was sent to the database. 
handleSubmit = (event) =>{
    event.preventDefault();
    console.log('clicked Edit');
    this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state.newDetails })
}
// lets you go back.
backButton = () => {
    console.log('clicked back')
    this.props.history.push('/details');
}

  render() {
    const { classes } = this.props;
    console.log (this.props.reduxStore.setDescription)
    let item = this.props.reduxStore.setDescription
   

    return (
        <>
        {JSON.stringify(item.id)}
        <form><br/><br/>

      
      <TextField type="text" placeholder= "title"  className={classes.textField} value={this.state.newDetails.title}    onChange={(event) => this.handleChange(event, 'title')}></TextField><br/>
      <TextField type="text" placeholder= "description" className={classes.textArea} multiline rows="10" columns="100" value={this.state.newDetails.description}  onChange={(event) => this.handleChange(event, 'description')}></TextField><br/>

      </form>
    <div className="App">
        <h2>Details</h2>
        <p>Title: {item.title}</p>
       <p>Genre: {item.name}</p>
        <p>Description: {item.description}<br/></p>
        <Button type="submit" variant="contained" color="secondary" className={classes.button}  onClick={this.backButton}>Cancel</Button>
        <Button type="submit" variant="contained" color="primary" className={classes.button}  onClick={this.handleSubmit}>Save</Button>
    </div>
     </>
    );
   
  }
}

const putReduxStoreOnProps = (reduxStore) =>({
  reduxStore
})

export default withStyles(styles)(connect(putReduxStoreOnProps)(EditPage));