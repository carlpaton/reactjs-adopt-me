### Setup

In order to start an npm project, run `npm init` at the root of your project.

```
npm init -y                  ~ init (create a package.json file) and suppress questions
```

### Run the app

```
npm start
```

### Prettier

Prettier is mechanical, its concearned with things like `is there a space\return here` and how does this file start/end. So it cares about format but not what the code actually does.

```
npm i -D prettier            ~ -D means only for developer env, so this wont ship to production
npm cs                       ~ this will use `package-lock.json` (intended for production use where `package.json` will allow patches ect based on rules like the `^` character.)
```

Create `.prettierrc` with the content `{}` which means use the default config.

```
Format On Save               ~ check this
Require Config               ~ check this
```

- https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- https://prettier.io/

### ESLint

Concearned with code style, what methods are being used (old javascript).

```
npm install -D eslint eslint-config-prettier
```

Create `.eslintrc.json` with the following content:

```
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}
```

- https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
