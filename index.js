module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": false,
        "mocha": true,
        "jquery": true
    },
    "globals": {
        "document": true,
        "window": true
    },
    "rules": {
        "curly": 2,
        "eqeqeq": 1,
        "for-direction": 2,
        "getter-return": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-self-compare": 2,
        "no-throw-literal": 2,
        "no-class-assign": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-implied-eval": 2,
        "no-extra-bind": 1,
        "no-template-curly-in-string": 2,
        "no-caller": 2,
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-empty": 1,
        "no-console": 1,
        "no-alert": 1,
        "no-debugger": 1,
        "no-unreachable": 1,
        "no-warning-comments": 1,
        "semi": 1,
        "no-var": 1
    }
}