module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-unused-vars": [
      "error", {
        "argsIgnorePattern": "next"
      }
    ],
    "global-require": 0,
    "no-use-before-define": 0
  },
  "globals": {
		"$": true,
    "document": true,
    "navigator": true,
    "window": true,
    "it": true,
    "describe": true
	}
}