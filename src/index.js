import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import mainReducer from "./store/reducers/mainReducer";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import firebaseConfig from './firebase/firebase'
import firebase from 'firebase/app'

const store = createStore(mainReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(firebaseConfig),
))

const firebaseProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    userProfile: 'users',
    presence: 'presence',
    sessions: 'sessions'
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...firebaseProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
