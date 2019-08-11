import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
	Indicator,
	Container,
	NoAccountButton,
	NoAccountText,
	Content,
} from './styles';
import Logo from './components/logo';
import { login } from '../../services/cookDinnerApi';
import getText from '../../util/getText';
import Login from './components/login';

export default function Auth({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [text] = useState(getText('auth'));

	async function send(user, pass) {
		setLoading(true);
		const response = await login(user, pass);
		setLoading(false);
		return response;
	}

	function openRegister() {
		// TODO: animate to register
		navigation.navigate('register');
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

Auth.propTypes = {
	navigation: PropTypes.instanceOf(Object).isRequired,
};
