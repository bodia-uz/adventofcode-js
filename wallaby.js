module.exports = function (wallaby) {
  return {
    files: [
      '2017/**/*.js',
      '!2017/**/*.spec.js',
    ],
    tests: [
      '2017/**/*.spec.js',
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