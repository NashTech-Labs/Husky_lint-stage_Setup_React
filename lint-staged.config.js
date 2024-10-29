module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix', // Fix and lint JS/TS files
    'prettier --write', // Format with Prettier
  ],
};
