import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieGallery extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    this.props.dispatch({type:'FETCH_MOVIES'});
  }


  render() {
    return (
      <div>
          {JSON.stringify(this.props.reduxStore.movieList)}
          {
               this.props.reduxStore.movieList.map( item =>
                <div key={item.id}>
                <p>{item.title} </p>
                <p>{item.description}</p>
                <img src={item.poster} alt=""/> 
                </div>
                )
        }
      </div>
    );
  }
}

const putReduxStoreOnProps = (reduxStore) =>({
  reduxStore
})

export default connect(putReduxStoreOnProps)(MovieGallery);