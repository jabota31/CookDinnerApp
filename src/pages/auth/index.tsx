import React, { useState, useEffect } from 'react';

import { Indicator, Container, NoAccountButton, NoAccountText, Content } from './styles';
import Logo from './components/logo';
import { login } from '../../services/cookDinnerApi';
import getText from '../../util/getText';
import Login from './components/login';

export default function Auth(props: any) {
	let [loading, setLoading] = useState(false);
	let [text, setText] = useState(getText('auth'));

	async function send(user: string, pass: string) {
		setLoading(true);
		let response = await login(user, pass);
		setLoading(false);
		return response;
	}

	function openRegister() {
		//TODO: animate to register
		props.navigation.navigate('register');
	}

	return (
		<Container pointerEvents={loading ? 'none' : 'auto'}>
			<Content>
				<Logo />
				{loading ? <Indicator /> : null}

				<Login
					send={send}
					text={text}
				/>

				<NoAccountButton onPress={openRegister}>
					<NoAccountText>{text.noAccount}</NoAccountText>
				</NoAccountButton>
			</Content>
		</Container>
	);
}
