import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #fff;
`;

export const Content = styled.KeyboardAvoidingView`
	flex: 1;
	justify-content: center;
	align-items: center;
	align-content: space-between;
	background-color: #00ad9f;
`;

export const Indicator = styled.ActivityIndicator`
    align-self: center;
	z-index: 2;
	position: absolute;
`;

export const TextBox = styled.TextInput`
    background-color: #FFF;
    margin-top: 10;
    font-size: 15;
    width: 75%;
	height: 45;
    text-align: center;
    border-color: #00ad9f;
    border-width: 2;
    border-radius: 20;
`;

export const AvatarContainer = styled.TouchableOpacity`
	align-self: center;
	margin: 10px;
`;

export const AvatarCircle = styled.Image`
	width: 200;
	height: 200;
	border-radius: 100;
`;

export const UnderText = styled.Text`
	font-size: 12;
	opacity: 0.8;
	color: #f22;
	font-weight: bold;
	margin-left: auto;
	margin-right: 13%;
`;

export const RegisterButtonText = styled.Text`
    font-size: 20;
    align-self: center;
    color: #fff;
`;

export const RegisterButton = styled.TouchableOpacity`
    width: 50%;
    height: 40;
    border-color: #fff;
    border-width: 1;
    border-radius: 20;
    background-color: #00ad9f;
    justify-content: center;
    align-self: center;
	margin-top: 20;
	margin-bottom: 30;
`;
