import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
	createAppContainer,
	createBottomTabNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createSwitchNavigator
} from 'react-navigation';
import Detail from './screens/Detail';
import Feed from './screens/Feed';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import WelcomeScreen from './screens/WelcomeScreen';

interface Navigation {
	navigation: any;
}

const FeedStack = createStackNavigator({
	Feed: {
		screen: Feed,
		navigationOptions: ({ navigation }: Navigation) => {
			return {
				headerTitle: 'Feed',
				headerLeft: (
					<Icon
						onPress={() => navigation.openDrawer()}
						style={{ paddingLeft: 10 }}
						name="md-menu"
						size={30}
					/>
				)
			};
		}
	},
	Detail: {
		screen: Detail
	}
});

const ProfileStack = createStackNavigator(
	{
		Profile: {
			screen: Profile,
			navigationOptions: ({ navigation }: Navigation) => {
				return {
					headerTitle: 'Profile',
					headerLeft: (
						<Icon
							onPress={() => navigation.openDrawer()}
							style={{ paddingLeft: 10 }}
							name="md-menu"
							size={30}
						/>
					)
				};
			}
		},
		Detail: {
			screen: Detail
		}
	},
	{
		defaultNavigationOptions: {
			gesturesEnabled: false
		}
	}
);

const SettingsStack = createStackNavigator({
	Settings: {
		screen: Settings,
		navigationOptions: ({ navigation }: Navigation) => {
			return {
				headerTitle: 'Settings',
				headerLeft: (
					<Icon
						onPress={() => navigation.openDrawer()}
						style={{ paddingLeft: 10 }}
						name="md-menu"
						size={30}
					/>
				)
			};
		}
	},
	Detail: {
		screen: Detail
	}
});

const DashboardTabNavigator = createBottomTabNavigator(
	{
		FeedStack,
		ProfileStack,
		SettingsStack
	},
	{
		navigationOptions: ({ navigation }: Navigation) => {
			const { routeName } = navigation.state.routes[navigation.state.index];
			return {
				header: null,
				headerTitle: routeName
			};
		}
	}
);

const DashboardStackNavigator = createStackNavigator(
	{
		DashboardTabNavigator: DashboardTabNavigator
	},
	{
		defaultNavigationOptions: ({ navigation }) => {
			return {
				headerLeft: (
					<Icon
						onPress={() => navigation.openDrawer()}
						style={{ paddingLeft: 10 }}
						name="md-menu"
						size={30}
					/>
				)
			};
		}
	}
);

const AppDrawerNavigator = createDrawerNavigator({
	Dashboard: {
		screen: DashboardStackNavigator
	},
	Login: {
		screen: WelcomeScreen
	}
});

const AppSwitchNavigator = createSwitchNavigator({
	welcome: { screen: WelcomeScreen },
	Dashboard: { screen: AppDrawerNavigator }
});

export const AppContainer = createAppContainer(AppSwitchNavigator);
