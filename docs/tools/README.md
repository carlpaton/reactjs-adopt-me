### Setup

In order to start an npm project, run `npm init` at the root of your project.

```
npm init -y                  ~ init (create a package.json file) and suppress questions
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

Concearned with code style, what methods are being used (are you using old javascript ect).

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

### Parcel

Web application bundler (its like webpack)

```
npm install -D parcel-bundler
```

Then add to `package.json` -> scripts

```
"dev": "parcel src/index.html"
```

Then to run:

```
npm run dev
```

- https://parceljs.org/

### Install dependencies

```
npm i react react-dom
```

After installing `react` and `react-dom` you no longer need to pull these files from the CDN

```
<script src="https://unpkg.com/react@16.8.4/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.8.4/umd/react-dom.development.js"></script>
```

### Npm Intellisense

- https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense

### More tools needed when using JSX

```
npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

### Hooks

Some rules to help validate your hooks.

```
npm i -D eslint-plugin-react-hooks
```
