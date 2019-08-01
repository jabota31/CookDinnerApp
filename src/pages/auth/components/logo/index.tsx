import React from 'react';
import { Container, LogoImage } from './styles';

export default function Logo() {
	return (
		<Container>
			<LogoImage
				source={require('../../../../assets/logo.png')}
			/>
		</Container>	
	);
}