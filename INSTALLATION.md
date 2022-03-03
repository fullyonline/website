# Installationsanleitung

## reactapp

```
yarn create react-app client --template typescript
```

## yarn init auf oberster Ebene
```
yarn init
```

## typescript installieren

```
yarn add -D typescript
```

## eslint

### installieren

```shell
yarn add -D eslint
```

### wegen typescript

```shell
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## wegen React

```shell
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

### config erstellen

```shell
yarn create @eslint/config
```

### scripts

```shell
"scripts": {
    "lint": "eslint --cache \"src/**/*.{js,jsx,ts,tsx}\"",
    "lint:fix": "eslint --cache --fix \"src/**/*.{js,jsx,ts,tsx}\""
  },
```