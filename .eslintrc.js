module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        project: ['./tsconfig.json', "./cypress/tsconfig.json"],
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        "react": {
            version: "detect"
        }
    },
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        "plugin:@cypress/dev/tests"
    ],
    rules: {
        // 'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
        "react/prop-types": "off",
        "@typescript-eslint/no-unused-vars": [1, {"argsIgnorePattern": "^_"}],
        "@typescript-eslint/explicit-function-return-type": "off",
        // This helps with material-ui tree-shaking -> https://material-ui.com/guides/minimizing-bundle-size/
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
            }
        ],
        '@cypress/dev/skip-comment': "off"
    }
};
