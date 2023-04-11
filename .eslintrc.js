module.exports = {
    root: true,

    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', './'],
                extensions: ['.js', '.ts'],
            },
        },
    },

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: ['./tsconfig.json', './packages/parser/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },

    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['./tsconfig.json', './packages/parser/tsconfig.json'],
            },
        },
    ],

    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },

    plugins: ['prettier', '@typescript-eslint'],
};
