import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const Content = styled.KeyboardAvoidingView`
	flex: 1;
	justify-content: flex-end;
`;

export const NoAccountButton = styled.TouchableOpacity`
	align-self: flex-end;
    padding-bottom: 15;
    padding-top: 15;
    background-color: #007d6f;
    width: 100%;
    justify-content: center;
`;

export const NoAccountText = styled.Text`
    align-self: center;
    font-size: 20;
    font-weight: bold;
	color: #fff;
`;

export const Indicator = styled.ActivityIndicator`
    align-self: center;
	z-index: 2;
	position: absolute;
`;

export const LoginContainer = styled.View`
    align-items: center;
    background-color: #00ad9f;
	padding-top: 15;
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

export const LoginButtonText = styled.Text`
    font-size: 20;
    align-self: center;
    color: #fff;
`;

export const LoginButton = styled.TouchableOpacity`
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
