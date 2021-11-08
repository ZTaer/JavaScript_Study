require('dotenv').config();

const { NODE_ENV } = process.env;

const config = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-typescript',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*/**.ts'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: ['./tsconfig.eslint.json'],
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-console': NODE_ENV === 'development' ? 'off' : 'error',
		'import/newline-after-import': 'error',
		quotes: ['error', 'single'],
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				semi: true,
			},
		],
		semi: 'off',
		'@typescript-eslint/semi': 'off',
		'arrow-body-style': ['off', 'as-needed'],
		'@typescript-eslint/comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
				imports: 'always-multiline',
				objects: 'always-multiline',
			},
		],
		'@typescript-eslint/no-var-requires': ['off'],
		'import/order': 'error',
		'import/first': 'error',
		'import/no-unresolved': 'off',
		indent: 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'react/react-in-jsx-scope': ['off'],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'react/jsx-props-no-spreading': ['off'],
		'import/prefer-default-export': ['off'],
	},
};

module.exports = config;
