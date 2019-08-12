import React, { useState } from 'react';

import checkCredentials from '../../util/checkCredentials';
import { register } from '../../services/cookDinnerApi';
import {
	Container,
	Content,
	TextBox,
	AvatarContainer,
	AvatarCircle,
	UnderText,
	RegisterButton,
	RegisterButtonText,
	Indicator,
} from './styles';
import i18n from '../../i18n';
import defaultImage from '../../assets/logo-circle-white.png';
// import { choosePic, takePic } from '../../util/getImage';

export const navigationOptions = () => ({
	// TODO: configure header baar
	title: i18n.t('createAccount'),
});

export default function Register() {
	// Component variables
	let emailInput;
	let passInput;
	let confirmPassInput;
	const [image, setImage] = useState(null);

	const [state, setState] = useState({
		email: '',
		name: '',
		pass: '',
		confirmPass: '',
		loading: false,
		under: {
			email: '',
			name: '',
			pass: '',
			confirmPass: '',
		},
	});

	async function send() {
		setState({ ...state, loading: true });
		const under = checkCredentials(state.name, state.email, state.pass, state.confirmPass);
		if (!under.email && !under.name && !under.pass && !under.confirmPass) {
			if (register(state.name, state.email, state.pass)) {
				// TODO: navigate to home
			} else {
				// TODO: handle connection error
			}
		}
		setState({ ...state, loading: false, under });
	}

	function showPicker() {
		// TODO: show options
		// handle image
	}

	return (
		<Container>
			<Content pointerEvents={state.loading ? 'none' : 'auto'}>
				{state.loading ? <Indicator /> : null}
				<AvatarContainer onPress={showPicker}>
					<AvatarCircle
						source={image || defaultImage}
					/>
				</AvatarContainer>

				<TextBox
					placeholder={i18n.t('name')}
					onChangeText={(name) => setState({ ...state, name })}
					returnKeyType="next"
					autoCapitalize="none"
					value={state.name}
					autoCorrect={false}
					onSubmitEditing={() => {
						emailInput.focus();
					}}
					blurOnSubmit={false}
					style={state.under.name ? { color: '#f22', borderColor: '#f22' } : {}}
				/>
				<UnderText>
					{state.under.name}
				</UnderText>

				<TextBox
					placeholder={i18n.t('email')}
					onChangeText={(email) => setState({ ...state, email })}
					returnKeyType="next"
					autoCapitalize="none"
					value={state.email}
					autoCorrect={false}
					onSubmitEditing={() => {
						passInput.focus();
					}}
					ref={(input) => {
						emailInput = input;
					}}
					blurOnSubmit={false}
					style={state.under.email ? { color: '#f22', borderColor: '#f22' } : {}}
				/>
				<UnderText>
					{state.under.email}
				</UnderText>

				<TextBox
					placeholder={i18n.t('password')}
					onChangeText={(pass) => setState({ ...state, pass })}
					value={state.pass}
					secureTextEntry
					returnKeyType="send"
					autoCapitalize="none"
					autoCorrect={false}
					ref={(input) => {
						passInput = input;
					}}
					onSubmitEditing={() => {
						confirmPassInput.focus();
					}}
					style={state.under.pass ? { color: '#f22', borderColor: '#f22' } : {}}
				/>
				<UnderText>
					{state.under.pass}
				</UnderText>

				<TextBox
					placeholder={i18n.t('confirmPassword')}
					onChangeText={(confirmPass) => setState({ ...state, confirmPass })}
					value={state.confirmPass}
					secureTextEntry
					returnKeyType="send"
					autoCapitalize="none"
					autoCorrect={false}
					ref={(input) => {
						passInput = input;
					}}
					onSubmitEditing={send}
					style={state.under.confirmPass ? { color: '#f22', borderColor: '#f22' } : {}}
				/>
				<UnderText>
					{state.under.confirmPass}
				</UnderText>
				<RegisterButton onPress={send}>
					<RegisterButtonText>
						{i18n.t('register')}
					</RegisterButtonText>
				</RegisterButton>
			</Content>
		</Container>
	);
}
