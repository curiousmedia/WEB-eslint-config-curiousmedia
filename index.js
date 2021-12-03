module.exports = {
    "env": {
        "amd": false,
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "document": true,
        "window": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "curly": 2,
        "eqeqeq": 1,
        "for-direction": 2,
        "getter-return": 2,
        "no-alert": 1,
        "no-caller": 2,
        "no-class-assign": 2,
        "no-console": 1,
        "no-debugger": 1,
        "no-empty": 1,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extra-bind": 1,
        "no-implied-eval": 2,
        "no-return-assign": 2,
        "no-return-await": 2,
        "no-self-compare": 2,
        "no-template-curly-in-string": 2,
        "no-throw-literal": 2,
        "no-undef": 0,
        "no-unreachable": 1,
        "no-unused-vars": 0,
        "no-var": 1,
        "no-warning-comments": 1,
        "semi": 1,
    }
}