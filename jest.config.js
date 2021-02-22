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
    '^@Features/(.+)$': path.resolve(__dirname, 'src/features/$1'),
    '^@Components/(.+)$': path.resolve(__dirname, 'src/components/$1'),
    '^@Images/(.+)$': '<rootDir>/src/assets/images/$1',
    '@Helpers/(.+)$': '<rootDir>/src/helpers/$1',
    '@Mockdata/(.+)$': '<rootDir>/src/mockdata/$1',

  },
};
