import React, { Component } from 'react';
import { Button, View } from 'react-native';

interface NavigationProps {
	props: any;
}

export default class FeedScreen extends Component<{ props: NavigationProps }> {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Button title="Go to Details Screen" onPress={() => this.props.navigation.navigate('Detail')} />
			</View>
		);
	}
}
