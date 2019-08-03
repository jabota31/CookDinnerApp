import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	justify-content: flex-end;
	
`;

export const NoAccountButton = styled.TouchableOpacity`
	align-self: flex-end;
    padding-bottom: 15;
    padding-top: 15;
    background-color: #00897b;
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