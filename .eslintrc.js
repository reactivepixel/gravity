module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-unused-vars": [
      "error", {
        "argsIgnorePattern": "next"
      }
    ],
    "global-require": 0,
    "no-use-before-define": 0, 
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/no-array-index-key": 0,
    "import/no-extraneous-dependencies": 0, 
    "import/no-cycle": 0,
    "react/prefer-stateless-function": 0
  },
  "globals": {
		"$": true,
    "document": true,
    "navigator": true,
    "window": true,
    "it": true,
    "describe": true,
    "localStorage": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint"
}