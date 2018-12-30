import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store'
import {Container} from './components/landing'

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};


export default AppWrapper;