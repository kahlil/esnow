# esnow

The **_FUTURE_** is **_NOW_**.  
Write future JavaScript now everywhere all the time in a snap!  

This package configures [`browserify`](https://www.npmjs.com/package/browserify) with [`babelify`](https://www.npmjs.com/package/babelify), includes source maps support via [`exorcist`](https://www.npmjs.com/package/exorcist) and uses [`uglifyify`](https://www.npmjs.com/package/uglifyify) for production builds.

It is very easy to use.

## Usage

Install `esnow` with npm.

```sh
npm install esnow --save-dev
```

Use it in your package.json `scripts` field. Specify your entryfile with the `-e` option and the output folder with the `-o` option.

```js
"scripts": {
	"js": "esnow -e js/main.js -o out/js"
}
```

Execute it with npm.

```sh
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
- use `package.json` for Browserify transforms

# License

MIT
