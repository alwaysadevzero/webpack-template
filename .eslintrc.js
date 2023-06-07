module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        'airbnb-base',
        'plugin:prettier/recommended'
    ],
    "parserOptions": {
        "ecmaVersion": 'latest',
        "sourceType": "module",
    },
    "plugins": ["prettier"],
    "rules": {
        'import/extensions': "off",
        "prettier/prettier": "error",
    },
};
