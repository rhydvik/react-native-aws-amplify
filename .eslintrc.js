module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/jsx-uses-react': 1,
    'import/export': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 0,
    'no-extra-boolean-cast': 0,
    'no-unused-vars': 0,
    // 'import-order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'internal'],
    //     pathGroups: [
    //       {
    //         pattern: 'react.*?',
    //         group: 'external',
    //         position: 'before',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['react'],
    //     'newlines-between': 'always',
    //   },
    // ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 0,
  },
};
