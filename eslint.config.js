import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions:
      {
        globals:
          globals.node,
        ecmaVersion: 2021,
        sourceType:
          'module',
      },
  },
  pluginJs
    .configs
    .recommended,
  {
    rules:
      {
        'no-unused-vars':
          'error',
        eqeqeq:
          [
            'error',
            'always',
          ],
        'no-console':
          'off',
      },
  },
];
