module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/",
  ],
  coverageReporters: [
    "text",
    "lcov"
  ],
  setupFiles: [
    './tests/unit/setup.js',
    './vue.config.js'
  ],
  testTimeout: 30000,
}
