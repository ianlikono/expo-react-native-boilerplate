import * as React from 'react';
import { Text, View } from 'react-native';

export default class DashboardScreen extends React.Component {
	public render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text> Dashboard Screen </Text>
			</View>
		);
	}
}
