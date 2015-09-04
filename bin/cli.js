#!/usr/bin/env node
var opts;
var path = require('path');
var chalk = require('chalk');
var argv = require('minimist')(process.argv.slice(2));
var esnow = require('../lib/');

// Parse command line options.
var entryFile = argv.entryFile || argv.e || '';
var outputFileName = argv.outputFileName || argv.f || path.basename(entryFile);
var outputPath = argv.outputPath || argv.o || '';
var outputFile = path.join(process.cwd(), outputPath, outputFileName);
var prod = argv.prod || argv.p || false;
var watch = argv.watch || argv.w || false;

if (outputPath === '' || entryFile === '') {
  console.error('Please specify ' + chalk.green('--outputPath') + ' and ' + chalk.green('--entryFile') + '!');
  process.exit(1);
}

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
