/* eslint-disable unused-imports/no-unused-imports */
import config from '@sozdev/eslint-config'
import eslintPluginStylisticTs from '@stylistic/eslint-plugin-ts'
import { Linter } from 'eslint'

/** @type {Linter.FlatConfig} */
const schema = [
  ...config,
  {
    plugins: {
      '@stylistic/ts': eslintPluginStylisticTs,
    },
    rules: {
      'curly': ['error', 'multi-line', 'consistent'],
      'newline-before-return': ['error'],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
      'multiline-ternary': ['error', 'always-multiline'],
      'brace-style': ['error', 'stroustrup'],
      'arrow-body-style': ['error', 'always'],
      'eqeqeq': ['error', 'smart'],
    },
  },
]

export default schema
