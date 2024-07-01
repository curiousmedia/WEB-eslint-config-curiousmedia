const globals = require("globals");
const js = require("@eslint/js");
const stylisticJs = require("@stylistic/eslint-plugin-js");

module.exports = [
    js.configs.recommended,
    {
        plugins: {
            '@stylistic/js': stylisticJs
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                document: true,
                window: true
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "@stylistic/js/no-mixed-spaces-and-tabs": 2,
            "@stylistic/js/no-trailing-spaces": 1,
            "@stylistic/js/semi": 1,
            "block-scoped-var": 1,
            "consistent-return": 1,
            "camelcase": 1,
            "curly": 2,
            "dot-notation": 1,
            "eqeqeq": 1,
            "id-length": [1, {"exceptions": ["i", "j", "x", "y", "a", "b"], "min": 2, "max": 32, "properties": "never"}],
            "max-depth": [1, 8],
            "max-params": [1, 8],
            "new-cap": [1, { "capIsNew": false }],
            "no-alert": 1,
            "no-await-in-loop": 1,
            "no-caller": 2,
            "no-class-assign": 2,
            "no-constructor-return": 2,
            "no-console": [1, { "allow": ["warn", "error"] }],
            "no-debugger": 1,
            "no-duplicate-imports": 1,
            "no-empty": 1,
            "no-eq-null": 2,
            "no-eval": 2,
            "no-extend-native": 2,
            "no-extra-bind": 1,
            "no-implied-eval": 2,
            "no-lone-blocks": 1,
            "no-lonely-if": 1,
            "no-loop-func": 2,
            "no-native-reassign": 2,
            "no-nested-ternary": 1,
            "no-proto": 2,
            "no-return-assign": 2,
            "no-self-compare": 2,
            "no-template-curly-in-string": 2,
            "no-throw-literal": 2,
            "no-undef": 0,
            "no-unneeded-ternary": 1,
            "no-unmodified-loop-condition": 1,
            "no-unreachable": 1,
            "no-unreachable-loop": 2,
            "no-unused-expressions": 2,
            "no-unused-vars": [1, { "args": "none" }],
            "no-useless-assignment": 1,
            "no-useless-call": 2,
            "no-useless-concat": 2,
            "no-var": 2,
            "no-warning-comments": 1,
            "prefer-const": 1,
            "require-atomic-updates": 1,
            "require-await": 1,
            "yoda": 1
        }
    }
];
