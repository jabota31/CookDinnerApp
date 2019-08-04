import React from 'react';
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';

import Auth from './pages/auth';
import Home, { navigationOptions as homeOptions } from './pages/home';
import Register, { navigationOptions as registerOptions } from './pages/register';
import store from './store';


/*
	Specifies Routes for the App
	Imports all pages to be handled by React Navigation lib
*/

//Authentication Stack separate to block back button logout
const AuthStack = createStackNavigator(
	{
		auth: Auth,
		register: {
			screen: Register,
			navigationOptions: registerOptions
		}
	},
	{
		initialRouteName: 'auth',
		defaultNavigationOptions: {
			header: null,
		},
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
		defaultNavigationOptions: {
			header: null,
		},
	}
);

const RootStack = createSwitchNavigator(
	{
		authFlow: AuthStack,
		app: AppStack,
	},
	{
		initialRouteName: 'authFlow'
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