module.exports = {
  testMatch: ["**/__tests__/**/*.(spec|test).js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/__mocks__/styleMock.js",
  },
};
