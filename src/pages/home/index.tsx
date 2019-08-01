import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import getText from '../../util/getText';

export function navigationOptions({ navigation }) {
	return {
		header: null
	};
}

export default function Home() {
	const dispatch = useDispatch();
	const [text, setText] = useState(() => {
		console.log('use state');
		return getText('home');
	});

	function changeLanguage() {
		dispatch({
			type: 'CHANGE_LANG'
		});
		setText(getText('home'));
	}
	
	return (
		<View>
			<Text>{text.helloWorld}</Text>
			<Button
				title={text.changeLanguage}
				onPress={changeLanguage}
			/>
		</View>
	);
}
