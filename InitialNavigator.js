
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import  HomeNavigator from './AppNavigator';
import  SplashScreen  from './src/page/SplashScreen';






const InitialNavigator = createSwitchNavigator({
  SplashScreen: { screen: SplashScreen },
  App: { screen: HomeNavigator }
});
// export default InitialNavigator;

export const AppContainer = createAppContainer(InitialNavigator);





