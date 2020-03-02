import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import Login from './Login.js'


const Routes = () => (
 
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "login" initial = {true} />
         <Scene key = "home" component = {Home} title = "home" />
      </Scene>

)
export default Routes
