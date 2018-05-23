#!/usr/bin/env bash

set -e

rm -rf dist/
tsc -p .
browserify --standalone Furnish src/furnish.ts -p [tsify] | uglifyjs > dist/furnish.js
echo "Prepared bundle"
npm pack