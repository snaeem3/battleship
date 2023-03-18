module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
