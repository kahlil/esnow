# esnow - DEPRECATED

_**This repo is not being maintained. I recommend you use [budo](http://npm.im/budo) instead.**_

Write ES2015 for the browser, import Node packages with the ES2015 module syntax and generate separate source maps.

`esnow` is a Node package that preconfigures Browserify including the Babelify and Uglifyify transforms. It generates
separate source map files using Exorcist.

For watching and compiling changed files esnow uses [`watchify`](https://www.npmjs.com/package/watchify). Watchify increases compile speed after the first compile because it uses caching.

It is very easy to use.

## Usage

Install `esnow` with npm.

```sh
npm install esnow --save-dev
```

Add an `esnow` call it to your package.json `scripts` field. Specify your entryfile with the `-e` option and the output folder with the `-o` option. `esnow` will produce an `main.js` and an `main.js.map` in your output folder.

```js
"scripts": {
  "js": "esnow -e js/main.js -o out/js"
}
```

If you want to use Watchify just add `-w`.

```js
"scripts": {
  "jsw": "esnow -e js/main.js -o out/js -w"
}
```

Execute it with npm.

```sh
npm run js
```

or

```sh
npm run jsw
```

### Using Node Packages

Because we are using Browserify you can install and use node packages in your program of course.

Install a package as a devDependency:

```sh
npm install --save-dev some-cool-package
```

Then go ahead and import it in your program with the ES2015 module syntax:

```js
import someCoolPackage from 'some-cool-package';
```

Then use it!

```js
someCoolPackage();
```

The Babelify transform transpiles this to a CommonJS `require` statement and passes it on to Browserify to bundle it up with your program.

## Global Install

You can also install and use it globally.

```sh
npm install -g esnow
```

Then just use it anywhere you want with the `esnow` command.

```sh
esnow -e js/main.js -o out/js
```

or

```sh
esnow -e js/main.js -o out/js -w
```

Enjoy writing **ESXXXX** code with Node packages and debugging it easily via source maps.

## Options

```
    --outputPath, -o  Pass the output path (required).
     --entryFile, -e  Path to the entry file (required).
         --watch, -w  Watch and compile your files with watchify.
          --prod, -p  Production mode (minifies the code).
--outputFileName, -f  Name of the output file defaults to the basename of `--entryFile`.
```

## Todo

- write better tests
- add better cli with help with [`commander`](https://www.npmjs.com/package/commander)
- use `package.json` for Browserify transforms
- refactor this package to es6

## Changelog

### v2.0.0
* The output filename does not default to "app.js" anymore. It defaults to the filename of your entryfile. Feature added by @andreruffert.

# License

MIT © [Kahlil Lechelt](http://kahlil.info)
