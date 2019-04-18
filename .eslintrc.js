module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-unused-vars": [
      "error", {
        "argsIgnorePattern": "next"
      }
    ],
    "global-require": 0
  },
  "globals": {
		"$": true,
		"document": true
	}
}