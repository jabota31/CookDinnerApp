import React, { useState, useEffect } from 'react';

import { Indicator, Container, NoAccountButton, NoAccountText } from './styles';
import Logo from './components/logo';
import { login } from '../../services/cookDinnerApi';
import getText from '../../util/getText';
import Login from './components/login';
import { Keyboard } from 'react-native';


export function navigationOptions({ navigation }: any) {
	return {
		header: null
	};
}

export default function Auth() {
	let [loading, setLoading] = useState(false);
	let [text, setText] = useState(getText('auth'));

	//keyboard listening
	let keyboardIsShown = false;
	let showListener: any;
	let hideListener: any; 
	useEffect(() => {
		showListener = Keyboard.addListener('keyboardWillShow', () => { keyboardIsShown = true; });
		hideListener = Keyboard.addListener('keyboardDidHide', () => { keyboardIsShown = false; });
		return () => {
			showListener.remove();
			hideListener.remove();
		};
	}, []);

	async function validate(user: string, pass: string) {
		setLoading(true);
		let response = await login(user, pass);
		setLoading(false);
		return response;
	}

	function openRegister() {
		//TODO: animate to register
		console.error('openRegister(): Not Implemented Error');
	}

	return (
		<Container>
			{keyboardIsShown ? null : <Logo />}
			{loading ? <Indicator /> : null}

			<Login
				send={validate}
			/>

			<NoAccountButton onPress={openRegister}>
				<NoAccountText>Não possui uma conta?</NoAccountText>
			</NoAccountButton>
		</Container>
	);
}
