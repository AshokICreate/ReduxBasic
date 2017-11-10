/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, composeEnhancers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

export default class App extends Component<{}> {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAslmzUYgbKp86VHBQ8_GOS_sHSUUfulKA",
      authDomain: "employeemanager-2f6f5.firebaseapp.com",
      databaseURL: "https://employeemanager-2f6f5.firebaseio.com",
      projectId: "employeemanager-2f6f5",
      storageBucket: "employeemanager-2f6f5.appspot.com",
      messagingSenderId: "879336058733"
    };

    firebase.initializeApp(config);
  }

  render() {
    const middleware = [ReduxThunk];
    const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(...middleware));
    const store = createStore(reducers, {}, enhancer);
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}
