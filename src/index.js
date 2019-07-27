import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('SEND_ID', fetchDescription);
    yield takeEvery('UPDATE_DETAILS', updateDetails);

}

function* fetchMovies () {
 try{
     const response = yield axios.get('/movies');
     yield put({ type: 'SET_MOVIES', payload: response.data})
 } catch (error) {
     console.lof('error getting movies', error);
 }
}

function* fetchDescription (action) {
    try {
        console.log('action.payload', action.payload );
        const response = yield axios.get(`/movies/details/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: response.data})
    } catch (error ){
        console.log('error getting movie desciption', error);
    }
}


function* updateDetails (action) {
    try{
        console.log('action.payload', action.payload);
        yield axios.put(`/movies/update/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_MOVIES'})
    } catch (error) {
        console.log('error in updateDetails', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movieList = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genreList = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

const setDescription = (state={}, action) =>{
    switch(action.type) {
        case 'SET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}
//UPDATE_DETAILS stores edited content that gets sent to the out route.
const updatePut = (state={}, action) =>{
    switch(action.type) {
        case 'UPDATE_PUT':
            return action.payload;
            default:
                return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movieList,
        genreList,
        setDescription,
        updatePut,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
