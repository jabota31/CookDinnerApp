import React from 'react';

import { Container, LogoImage, LogoText } from './styles';
import logoImage from '../../../../assets/logo-circle.png';

export default function Logo() {
	return (
		<Container>
			<LogoImage
				source={
					logoImage
				}
			/>
			<LogoText>
				Cook
				Dinner
			</LogoText>
		</Container>
	);
}
