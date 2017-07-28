module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  rules: {
    'no-console': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
  },
  env: {
    browser: true,
    node: true,
  },
};
