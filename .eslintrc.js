module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
	},
  plugins: ['@typescript-eslint'],
	extends: [
	  'plugin:@typescript-eslint/recommended',
		'standard',
		'standard-react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
	rules: {
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'@typescript-eslint/indent': ["error", "tab"],
		'react/jsx-uses-vars': 1,
		"react/jsx-indent": ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab']
  }
}
