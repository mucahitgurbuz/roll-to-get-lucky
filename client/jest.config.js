module.exports = {
  preset: 'ts-jest',
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/__tests__/*.(test|spec).(ts|jsx|js|tsx)'],
  transformIgnorePatterns: ['node_modules'],
  testEnvironment: 'node',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./src/setupTests.js'],
  transform: {
    '\\.js$': 'babel-jest',
  },
}
