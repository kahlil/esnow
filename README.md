# _FUTURE.js_

Write future JS in a common way with [Browserify]() and [Babelify]() including source maps support and [Uglifyify]() for production builds.

## Usage

Install `future` with npm.

```
npm install future --save-dev
```

Use it in your package.json `scripts` field.

```js
"scripts": {
	"js": "future -e js/main.js -o out/js"
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

# License
MIT
