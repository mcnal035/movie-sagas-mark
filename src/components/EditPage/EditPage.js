import React, { Component } from 'react';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class EditPage extends Component {
  // Renders the entire app on the DOM
  state = {
      newDetails: {    
      title: '',
      description: '',
  
    }
  }

handleChange = (event, propToChange) => {
    this.setState({
        newDetails: {
           id: this.props.reduxStore.setDescription.id,
        ...this.state.newDetails,
        [propToChange]: event.target.value,
        }
    })
}
 
 
handleSubmit = (event) =>{
    event.preventDefault();
    console.log('clicked Edit');
    this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state.newDetails })
}

backButton = () => {
    console.log('clicked back')
    this.props.history.push('/details');
}

  render() {
   
    console.log (this.props.reduxStore.setDescription)
    let item = this.props.reduxStore.setDescription
   

    return (
        <>
        {JSON.stringify(item.id)}
        <form><br/><br/>
    <button onClick={this.backButton}>Cancel</button><br/><br/>
    <button onClick={this.handleSubmit}>Save</button>
      
      <input type="text" placeholder= "title"   value={this.state.newDetails.title}    onChange={(event) => this.handleChange(event, 'title')}></input><br/>
      <input type="text" placeholder= "description" value={this.state.newDetails.description}  onChange={(event) => this.handleChange(event, 'description')}></input><br/>

      </form>
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

export default connect(putReduxStoreOnProps)(EditPage);