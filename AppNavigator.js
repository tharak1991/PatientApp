
import SecondActivity  from './src/page/SecondActivity'; 
import MainActivity from './src/page/MainActivity';
	
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';





const AppNavigator = createStackNavigator({
  MainActivity: { screen: MainActivity },
 
  SecondActivity: { screen: SecondActivity }
});

export default AppNavigator;
export const AppContainer = createAppContainer(AppNavigator);






