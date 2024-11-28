global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// jest.config.js or in package.json under "jest"
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  
  