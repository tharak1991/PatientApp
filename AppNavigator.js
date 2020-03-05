
import SecondActivity  from './src/page/SecondActivity'; 
import MainActivity from './src/page/MainActivity';
	
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';





const HomeNavigator = createSwitchNavigator({
  MainActivity: { screen: MainActivity },
 
  SecondActivity: { screen: SecondActivity }
});

export default HomeNavigator;
// export const AppContainer2 = createAppContainer(AppNavigator);






