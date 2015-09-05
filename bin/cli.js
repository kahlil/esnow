#!/usr/bin/env node
var opts;
var path = require('path');
var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));
var esnow = require('../lib/');

// Parse command line options.
var entryFile = argv.entryFile || argv.e || false;

if (entryFile === false) {
  console.error('Please specify your',  chalk.green('--entryFile') + '.');
  process.exit(1);
}

/* eslint vars-on-top:0 */
var outputFileName = argv.outputFileName || argv.f || path.basename(entryFile);
var outputPath = argv.outputPath || argv.o || false;

if (outputPath === false) {
  console.error('Please specify your', chalk.green('--outputPath') + '.');
  process.exit(1);
}

var outputFile = path.join(process.cwd(), outputPath, outputFileName);
var prod = argv.prod || argv.p || false;
var watch = argv.watch || argv.w || false;

opts = {
  outputFileName: outputFileName,
  outputPath: path.join(process.cwd(), outputPath),
  entryFile: path.join(process.cwd(), entryFile),
  outputFile: outputFile,
  mapFile: outputFile + '.map',
  prod: prod,
  watch: watch,
};

esnow(opts);
