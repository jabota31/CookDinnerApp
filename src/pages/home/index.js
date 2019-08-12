import React from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import i18n from '../../i18n';

export function navigationOptions() {
	return {
		header: null,
	};
}

export default function Home() {
	const dispatch = useDispatch();

	function changeLanguage() {
		dispatch({
			type: 'CHANGE_LANG',
		});
	}

	return (
		<View>
			<Text>{i18n.t('helloWorld')}</Text>
			<Button
				title={i18n.t('changeLanguage')}
				onPress={changeLanguage}
			/>
		</View>
	);
}
