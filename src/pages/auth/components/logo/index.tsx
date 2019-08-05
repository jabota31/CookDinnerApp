import React from 'react'

import { Container, LogoImage, LogoText } from './styles'

export default function Logo (): React.ReactElement {
	return (
		<Container>
			<LogoImage
				source={require('../../../../assets/logo-circle.png')}
			/>
			<LogoText>
				Cook Dinner
			</LogoText>
		</Container>
	)
}
