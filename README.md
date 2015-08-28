# esnow

Welcome to the **_FUTURE_**.  
Write future JavaScript now everywhere all the time in a snap!

`esnow` configures Browserify with Babel so that you can write all future JavaScript syntax Babel supports while using Node packages.
It compiles your code into one ES5 file ready for the browser and generates separate source maps.  
Once you are ready for production you can generate an uglified version of your app.

## Details

This package configures [`browserify`](https://www.npmjs.com/package/browserify) with [`babelify`](https://www.npmjs.com/package/babelify), includes source maps support via [`exorcist`](https://www.npmjs.com/package/exorcist) and uses [`uglifyify`](https://www.npmjs.com/package/uglifyify) for production builds.

For watching and compiling changed files esnow uses [`watchify`](https://www.npmjs.com/package/watchify). Watchify increases compile speed after the first compile because it uses caching.

It is very easy to use.

## Usage

Install `esnow` with npm.

```sh
npm install esnow --save-dev
```

Add an `esnow` call it to your package.json `scripts` field. Specify your entryfile with the `-e` option and the output folder with the `-o` option. `esnow` will produce an `app.js` and an `app.js.map` in your output folder.

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
--outputFileName, -f  Name of the output file defaults to "app.js".
```

## Todo

- write better tests
- add better cli with help with [`commander`](https://www.npmjs.com/package/commander)
- use `package.json` for Browserify transforms
- refactor this package to es6

# License

MIT © [Kahlil Lechelt](http://kahlil.info)
