import React, { useState, useEffect } from 'react'; 

import checkCredentials from '../../util/checkCredentials';
import { register } from '../../services/cookDinnerApi';
import { Container, Content, TextBox, AvatarContainer, AvatarCircle, UnderText, RegisterButton, RegisterButtonText, Indicator } from './styles';
import getText from '../../util/getText';
import { choosePic, takePic } from '../../util/getImage';

let title = 'Create an account';
export const navigationOptions = () => ({
	title,
});

export default function Register() {
	//Component variables 
	let emailInput: any, passInput: any, confirmPassInput: any;
	let [text, setText] = useState(getText('register'));
	let [image, setImage] = useState(null);
	title = text.createAccount;
	let [state, setState] = useState({
		email: '',
		name: '',
		pass: '',
		confirmPass: '',
		loading: false,
		under: {
			email: '',
			name: '',
			pass: '',
			confirmPass: ''
		}
	});

	async function send() {
		setState({ ...state, loading: true });	
		let under = checkCredentials(state.name, state.email, state.pass, state.confirmPass);
		if (!under.email && !under.name && !under.pass && !under.confirmPass) {
			if (register(state.name, state.email, state.pass)) {
				//TODO: navigate to home	
			} else {
				//TODO: handle connection error
			}
		}
		setState({ ...state, loading: false, under });
	}
	
	function showPicker() {
		//TODO: show options
		// handle image
	}

	return (
		<Container>
			<Content pointerEvents={state.loading ? 'none' : 'auto'}>
				{state.loading ? <Indicator /> : null}
				<AvatarContainer onPress={showPicker}>
					<AvatarCircle
						source={image ? image : require('../../assets/logo.png')}
					/>
				</AvatarContainer>
			
				<TextBox
					placeholder={text.name}
					onChangeText={name => setState({ ...state, name })}
					returnKeyType="next"
					autoCapitalize="none"
					value={state.name}
					autoCorrect={false}
					onSubmitEditing={() => {
						emailInput.focus();
					}}
					blurOnSubmit={false}
					style={state.under.name ? { color: '#f22', borderColor: '#f22'}: {}} />
				<UnderText>
					{state.under.name}
				</UnderText>

				<TextBox
					placeholder={text.email}
					onChangeText={email => setState({ ...state, email })}
					returnKeyType="next"
					autoCapitalize="none"
					value={state.email}
					autoCorrect={false}
					onSubmitEditing={() => {
						passInput.focus();
					}}
					ref={input => {
						emailInput = input;
					}}
					blurOnSubmit={false}
					style={state.under.email ? { color: '#f22', borderColor: '#f22'}: {}} />
				<UnderText>
					{state.under.email}
				</UnderText>

				<TextBox
					placeholder={text.password}
					onChangeText={pass => setState({ ...state, pass })}
					value={state.pass}
					secureTextEntry={true}
					returnKeyType="send"
					autoCapitalize="none"
					autoCorrect={false}
					ref={input => {
						passInput = input;
					}}
					onSubmitEditing={() => {
						confirmPassInput.focus();
					}}
					style={state.under.pass ? { color: '#f22', borderColor: '#f22'}: {}} />
				<UnderText>
					{state.under.pass}
				</UnderText>

				<TextBox
					placeholder={text.confirmPassword}
					onChangeText={confirmPass => setState({ ...state, confirmPass })}
					value={state.confirmPass}
					secureTextEntry={true}
					returnKeyType="send"
					autoCapitalize="none"
					autoCorrect={false}
					ref={input => {
						passInput = input;
					}}
					onSubmitEditing={send}
					style={state.under.confirmPass ? { color: '#f22', borderColor: '#f22'}: {}} />
				<UnderText>
					{state.under.confirmPass}
				</UnderText>
				<RegisterButton onPress={send}>
					<RegisterButtonText>
						{text.register}
					</RegisterButtonText>
				</RegisterButton>
			</Content>
		</Container>
	);
}