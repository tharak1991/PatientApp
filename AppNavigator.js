
import SecondActivity  from './src/page/SecondActivity'; 
import MainActivity from './src/page/MainActivity';
	
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';





const AppNavigator = createStackNavigator({
  MainActivity: { screen: MainActivity },
 
  secoMainActivitynd: { screen: SecondActivity }
});

export default AppNavigator;
export const AppContainer = createAppContainer(AppNavigator);



// const AppNavigator = createStackNavigator({
//   render() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Friends" component={Friends} />
//       </Stack.Navigator>
//     );
//     }}

// );




