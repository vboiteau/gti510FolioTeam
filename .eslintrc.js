const path = require('path');

module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "mongo": true,
    "node": true,
    "browser": true
  },
  "extends": [
    "airbnb"
  ],
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase":1
        }],
        "radix": ["off"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/forbid-prop-types": ["off", {"allow": ["warn"]}],
        "react/no-did-mount-set-state": ["warn"],
        "react/no-array-index-key": ["warn"],
        "comma-dangle": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "import/prefer-default-export": 0,
        "import/extensions": [{ "scss": "never", "css": "never"}],
        "no-unused-vars": ["error", {"varsIgnorePattern": "style"}],
        "no-console": ["warn", {"allow": ["warn", "error", "info"]}],
        "no-underscore-dangle": ["off"],
        "max-depth": ["error", 4],
        "max-len": ["error", {
            "code": 180,
            "ignoreComments": true,
            "ignoreTrailingComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }]
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.resolve(path.join(__dirname, 'app/client/config/webpack.config.js'))
            }
        }
    }
};
