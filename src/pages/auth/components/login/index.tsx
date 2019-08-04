import React, { useState } from 'react';
import {
	Container,
	TextBox,
	LoginButtonText,
	LoginButton,
} from './styles';
import { Keyboard } from 'react-native';

interface Props {
	send(user: string, pass: string): Promise<Object>;
	text: {
		email: string;
		password: string;
		login: string;
	}
}

export default function Login(props: Props) {
	let [user, setUser] = useState('');
	let [pass, setPass] = useState('');
	let passInput: any;
	let send = props.send;

	return (
		<Container>
			<TextBox
				placeholder={props.text.email}
				onChangeText={text => setUser(text)}
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
				placeholder={props.text.password}
				onChangeText={text => setPass(text)}
				value={pass}
				secureTextEntry={true}
				returnKeyType="send"
				autoCapitalize="none"
				autoCorrect={false}
				ref={input => {
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
					{props.text.login}
				</LoginButtonText>
			</LoginButton>
		</Container>
	);
}