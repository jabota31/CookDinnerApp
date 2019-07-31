import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { Translation } from '../../util/types';
import langs from './lang';
import { languageSelect } from '../../util/getLanguage';

export default class AuthScreen extends Component {
	text: Translation;
	lang: string;

	constructor(props: any){
		super(props); 
		this.text = {
			test: '',
			change: ''
		};
		this.lang = 'pt';
		this.getLang();
	}

	getLang = () => {
		this.text = languageSelect(langs, this.lang);
		this.setState({});
	}

	changeLanguage = ()  => {
		if (this.lang == 'pt') this.lang = 'en';
		else if (this.lang == 'en') this.lang = 'pt';
		this.getLang();
	}

	render() {
		let text = this.text;
		return (
			<View>
				<Text>{text.test}</Text>
				<Button
					title={text.change}
					onPress={this.changeLanguage}>
					<Text>
						{text.change}
					</Text>
				</Button>
			</View>
		);
	}
}
