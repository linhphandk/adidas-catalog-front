const path = require('path');
module.exports = {
  'preset': 'ts-jest',
  'testEnvironment': 'node',
  'setupFiles': [
    '<rootDir>/src/test-setup.ts',
  ],
  'moduleNameMapper': {
    '.+\\.(css|styl|less|sass|scss|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '.+\\.(svg|jpeg|jpg|png)$':
     '<rootDir>/__mocks__/fileMock.js',
    '@Components': path.resolve(__dirname, 'src/components'),
    '^@Images/(.+)$': '<rootDir>/src/assets/images/$1',
    '@Helpers': path.resolve(__dirname, 'src/helpers'),
    '@Mockdata': path.resolve(__dirname, 'src', 'mockdata'),

  },
};
