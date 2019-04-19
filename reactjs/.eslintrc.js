module.exports =  {
  extends: ["airbnb"],
  rules: {
    // turning off old rule of needing jsx in file names
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react/no-array-index-key": 0,
    "import/no-extraneous-dependencies": 0, 
    "import/no-cycle": 0,
    "react/prefer-stateless-function": 0
    // "react/prefer-stateless-function": 0
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
}