import React from 'react';
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';

import Auth, { navigationOptions as authOptions } from './pages/auth';
import Home, { navigationOptions as homeOptions } from './pages/home';
import store from './store';


/*
	Specifies Routes for the App
	Imports all pages to be handled by React Navigation lib
*/

//Authentication Stack separate to block back button logout
const AuthStack = createStackNavigator(
	{
		auth: {
			screen: Auth,
			navigationOptions: authOptions
		},
	},
	{
		initialRouteName: 'auth'
	}
);

//Main App Stack which contains all logged in areas
const AppStack = createStackNavigator(
	{
		home: {
			screen: Home,
			navigationOptions: homeOptions
		},
	},
	{
		initialRouteName: 'home',
	}
);

const RootStack = createSwitchNavigator(
	{
		authFlow: AuthStack,
		App: AppStack,
	},
	{
		initialRouteName: 'App'
	}
);

let Navigation = createAppContainer(RootStack);

export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}