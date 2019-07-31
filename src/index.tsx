import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer
} from 'react-navigation';

import AuthScreen from './pages/auth';

/*
	Specifies Routes for the App
	Imports all pages to be handled by React Navigation lib
*/

//Authentication Stack separate to block back button logout
const AuthStack = createStackNavigator(
	{
		Auth: AuthScreen,
	},
	{
		initialRouteName: 'Auth'
	}
);

//Main App Stack which contains all logged in areas
/*
const AppStack = createStackNavigator(
	{

	},
	{
	}
);
*/

const RootStack = createSwitchNavigator(
	{
		Auth: AuthStack,
	},
	{
		initialRouteName: 'Auth'
	}
);

const App = createAppContainer(RootStack);

export default App;