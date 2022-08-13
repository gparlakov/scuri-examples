#!/bin/sh
if [ $# -lt 1 ]; then
  echo 1>&2 "$0: please provide scuri version like './run.sh latest' or './run.sh 1.2.0'"
  exit 2
fi
# The three arguments are available as "$1", "$2", "$3"

npm i scuri@$1
export NG_CLI_ANALYTICS=false
npx ng g scuri:autospy
node ./src/switch-to-chrome-headless.js ./karma.conf.js
node ./src/add-auto-spy-to-path.js ./tsconfig.js
npm test
