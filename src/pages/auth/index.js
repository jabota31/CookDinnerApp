import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Keyboard } from 'react-native';
import {
	Indicator,
	Container,
	NoAccountButton,
	NoAccountText,
	Content,
	TextBox,
	LoginContainer,
	LoginButton,
	LoginButtonText,
} from './styles';
import Logo from './components/logo';
import { login } from '../../services/cookDinnerApi';
import i18n from '../../i18n';

export default function Auth({ navigation }) {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	let passInput;

	async function send(username, password) {
		setLoading(true);
		const response = await login(username, password);
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

				<LoginContainer>
					<TextBox
						placeholder={i18n.t('email')}
						onChangeText={(value) => setUser(value)}
						returnKeyType="next"
						autoCapitalize="none"
						value={user}
						autoCorrect={false}
						onSubmitEditing={() => {
							passInput.focus();
						}}
						blurOnSubmit={false}
					/>

					<TextBox
						placeholder={i18n.t('password')}
						onChangeText={(value) => setPass(value)}
						value={pass}
						secureTextEntry
						returnKeyType="send"
						autoCapitalize="none"
						autoCorrect={false}
						ref={(input) => {
							passInput = input;
						}}
						onSubmitEditing={() => {
							send(user, pass);
						}}
					/>

					<LoginButton
						onPress={() => {
							Keyboard.dismiss();
							send(user, pass);
						}}
					>
						<LoginButtonText>
							{i18n.t('login')}
						</LoginButtonText>
					</LoginButton>
				</LoginContainer>

				<NoAccountButton onPress={openRegister}>
					<NoAccountText>{i18n.t('noAccount')}</NoAccountText>
				</NoAccountButton>
			</Content>
		</Container>
	);
}

Auth.propTypes = {
	navigation: PropTypes.instanceOf(Object).isRequired,
};
