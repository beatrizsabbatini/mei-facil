module.exports = {
	env: {
		es6: true,
	},
	extends: ['prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		__DEV__: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['eslint-plugin-import-helpers'],
	rules: {
		"max-len": [2, 120, 4, {"ignoreUrls": true}],
		'indent': [2, 'tab'],
		'import-helpers/order-imports': [
			'warn',
			{
				// example configuration
				newlinesBetween: 'always',
				groups: [
					'/^react/',
					'module',
					'/^~/',
					'/^@shared/',
					['parent', 'sibling', 'index'],
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
	},
};
