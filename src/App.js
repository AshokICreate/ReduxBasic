/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, compose, composeEnhancers } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'

export default class App extends Component<{}> {
  render() {
    const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers();
    const store = createStore(reducers, enhancer);
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Header headerText='Tech Stack'/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
