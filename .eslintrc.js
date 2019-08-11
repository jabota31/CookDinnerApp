module.exports = {
	parser:
		'babel-eslint',
	env: {
		es6: true,
		node: true,
	},
	plugins: [
		'react',
		'jsxa11y',
		'import',
	],
	extends: [
		'airbnb',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.jsx',
					'.json',
					'.native.js',
				],
			},
		},
	},
	globals: {
		Atomics:
			'readonly',
		SharedArrayBuffer:
			'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType:
			'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'no-tabs':
			'off',
		indent: [
			'error',
			'tab',
		],
		'react/jsx-indent': [
			'error',
			'tab',
		],
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		'react/jsx-filename-extension':
			'off',
	},
};
