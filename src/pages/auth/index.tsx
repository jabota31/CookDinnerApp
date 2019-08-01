import React, { useState, useEffect } from 'react';

import { Container, LoadingIndicator } from './styles';
import Logo from './components/logo';
import { login } from '../../services/cookdinnerapi';
import getText from '../../util/getText';


export function navigationOptions({ navigation }: any) {
	return {
		header: null
	};
}

export default function Auth() {
	let [loading, setLoading] = useState(false);
	let [text, setText] = useState(getText('auth'));
	
	useEffect(() => {
		loading = true;
		login('', '').then(response => {

		});
	}, []);

	useEffect(() => {
		setText(getText('auth'));
	}, []);

	return (
		<Container>
			<Logo />
			{ loading ? <LoadingIndicator /> : null }
		</Container>
	);
}
