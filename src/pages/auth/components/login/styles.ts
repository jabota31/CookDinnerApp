import styled from 'styled-components/native';


export const Container = styled.View`
    align-items: center;
    background-color: #00ab9d;
	padding-top: 15;
`;

export const TextBox = styled.TextInput`
    background-color: #FFF;
    margin-top: 10;
    font-size: 15;
    width: 75%;
	height: 45;
    text-align: center;
    border-color: #00ab9d;
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
    background-color: #00ab9d;
    justify-content: center;
    align-self: center;
	margin-top: 20;
	margin-bottom: 30;
`;