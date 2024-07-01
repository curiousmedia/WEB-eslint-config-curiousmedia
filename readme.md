# Curious Media ESLint config #
Shared ESLint config used for JavaScript in projects at Curious Media.

## Installation ##
Create a `eslint.config.js` file in the root of your project.

```js
const config = require("@curiousmedia/eslint-config-curiousmedia");

module.exports = [
  ...config
];
```