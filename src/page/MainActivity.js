import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class MainActivity extends Component {
 
  static navigationOptions =
   {
      title: 'MainActivity',
   };
   
   FunctionToOpenSecondActivity = () =>
   {
      this.props.navigation.navigate('SecondActivity');
      
   }
   
   render()
   {
      return(
         <View >
   
           <View >
   
            <Text> This is MainActivity </Text>
   
           </View>
   
            <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
          
         </View>
      );
   }
  }