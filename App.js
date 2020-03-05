
import React, { Component } from 'react';
 
import { StyleSheet } from 'react-native';
 
import { AppContainer2 } from './AppNavigator';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import { AppContainer } from './InitialNavigator';




 

export default class App extends React.Component {

render() {
  return(
    // <Provider store={createStore(reducers)}>
        <AppContainer />
      // </Provider>
    // <AppContainer/>
    
  

  );

}
}
 
const styles = StyleSheet.create(
{
 MainContainer:
 {
    justifyContent: 'center',
    flex:1,
    margin: 10
  
 },
 
 TextStyle:
 {
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
 },
 
});