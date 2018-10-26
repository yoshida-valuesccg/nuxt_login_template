module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'eslint:recommended',
    plugins: [
        'html'
    ],
    rules: {
        "semi": ["error", "always"],
        "indent": ["error", 4]
    },
    globals: {}
}
