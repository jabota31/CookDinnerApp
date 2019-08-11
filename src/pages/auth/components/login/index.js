import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import {
	Container,
	TextBox,
	LoginButtonText,
	LoginButton,
} from './styles';

export default function Login({ text, send }) {
	const [user, setUser] = useState('');
	const [pass, setPass] = useState('');
	let passInput: any;

	return (
		<Container>
			<TextBox
				placeholder={text.email}
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
				placeholder={text.password}
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
					{text.login}
				</LoginButtonText>
			</LoginButton>
		</Container>
	);
}

Login.propTypes = {
	text: PropTypes.instanceOf(Object).isRequired,
	send: PropTypes.func.isRequired,
};
