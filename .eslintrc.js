module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
  ],
  "env": {
    "browser": true,
    "node": true,
  },
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "semi": ["error", "never"],
    "arrow-body-style": ["warn", "as-needed"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }],
    "react/jsx-filename-extension": "off"
  }
}
