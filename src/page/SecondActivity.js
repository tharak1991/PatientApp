import React,  { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };
 
 render()
 {
    return(
       <View >
 
          <Text > This is SecondActivity </Text>
 
       </View>
    );
 }
}