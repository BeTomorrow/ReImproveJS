#!/usr/bin/env bash

set -e

rm -rf dist/
tsc -p .
browserify --standalone ReImprove src/reimprove.ts -p [tsify] > dist/reimprove.js #| uglifyjs > dist/reimprove.js
echo "Prepared bundle"
npm pack