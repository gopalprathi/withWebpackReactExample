module.exports = {
    collectCoverageFrom: ["src/**/*.{js,jsx,mjs,css}"],
    testMatch: ["<rootDir>/src/**/*.(spec|test).{js,jsx,mjs}"],
    transform: {
      "^.+\\.(js|jsx|mjs)$": "<rootDir>/jest-transformer.js",
      ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
    },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
  };