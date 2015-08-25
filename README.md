# ES_NOW_

The **_FUTURE_** is **_NOW_**.  
Write future JavaScript in a common way with [`browserify`](https://www.npmjs.com/package/browserify) and [`babelify`](https://www.npmjs.com/package/babelify) including source maps support via [`exorcist`](https://www.npmjs.com/package/exorcist) and [`uglifyify`](https://www.npmjs.com/package/uglifyify) for production builds.

## Usage

Install `esnow` with npm.

```
npm install esnow --save-dev
```

Use it in your package.json `scripts` field.

```js
"scripts": {
	"js": "esnow -e js/main.js -o out/js"
}
```

Execute it with npm.

```
npm run js
```

Enjoy writing ES_FUTURE_ code and debugging it easily via source maps.

## Options

```
    --outputPath, -o  Pass the output path (required).
     --entryFile, -e  Path to the entry file (required).
          --prod, -p  Production mode (minifies the code).
--outputFileName, -f  Name of the output file defaults to "app.js".
```

# Todo

- write better tests
- add better cli with help with [commander](https://www.npmjs.com/package/commander)

# License
MIT
