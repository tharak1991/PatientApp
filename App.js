
import React, { Component } from 'react';
 
import { StyleSheet } from 'react-native';
 
import { AppContainer } from './AppNavigator';




 

export default class App extends React.Component {

render() {
  return(
    <AppContainer/>
  

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