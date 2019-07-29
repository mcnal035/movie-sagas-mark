import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieGallery extends Component {
  // Renders the entire app on the DOM
  state = {
      movieId: '',
  }
// starts the page with movie info rendering to the dom.
  componentDidMount(){
    this.props.dispatch({type:'FETCH_MOVIES'});
  }
 // dispatches the payload id and it sends you to the details page.
  handleClick = (event, id) =>{
    //   console.log('clicked on poster', id);
     this.props.dispatch({type: 'SEND_ID', payload: id})
     this.props.history.push('/details');
  }


  render() {
    
    return (
      <div>
          {/* {JSON.stringify(this.state.event)} */}
          {
               this.props.reduxStore.movieList.map( item =>
                <div key={item.id}>
                <h2>{item.title} </h2>
                <p>{item.description}</p>
                <img onClick={(event, id) => this.handleClick(event, item.id)} src={item.poster} alt=""/> 
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