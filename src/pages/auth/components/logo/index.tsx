import React from 'react';
import { Animated } from 'react-native';

import { Container, LogoImage, LogoText } from './styles';

export default function Logo() {
	return (
		<Container>
			<LogoImage
				source={require('../../../../assets/logo-circle.png')}
			/>
			<LogoText>
				Cook Dinner
			</LogoText>
		</Container>	
	);
}