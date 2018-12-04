module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.spec.js',
    ],
    tests: [
      'src/**/*.spec.js',
    ],
    env: {
      type: 'node',
      params: {
        env: 'SRC_PATH=./src;NODE_ENV=test',
      }
    },
    testFramework: 'jest',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};