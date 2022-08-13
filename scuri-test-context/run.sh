#!/bin/sh
# kill the script if a command fails
set -e

if [ $# -lt 1 ]; then
  echo 1>&2 "$0: please provide scuri version like './run.sh latest' or './run.sh 1.2.0' also supported additional commands like './run.sh 1.2.0 'npx ng g scuri:spec --name --classTemplate myVolume:myclass-template.tmpl' '"
  exit 2
fi

# install the selected version of scuri
npm i scuri@$1
# stops the prompt which blocks the rest of the commands
export NG_CLI_ANALYTICS=false


# use headless chrome in karma config 
node ./switch-to-chrome-headless.js ./karma.conf.js
node ./switch-to-chrome-headless.js ./src/karma.conf.js
# add autospy to paths and create the file
node ./add-auto-spy-to-path.js ./tsconfig.js
npx ng g scuri:autospy

npx ng g scuri:spec --name src/app/my-com.component.ts
npx ng g scuri:spec --name src/app/service.ts
npx ng g scuri:spec --name src/app/other/other.component.ts

if [ $# -gt 1 ]; then
    echo $2
    $2
fi

if [ $# -gt 2 ]; then
    echo $3
    $3
fi

if [ $# -gt 3 ]; then
    echo $4
    $4
fi

if [ $# -gt 4 ]; then
    echo $5
    $5
fi

if [ $# -gt 5 ]; then
    echo $6
    $6
fi

if [ $# -gt 6 ]; then
    echo $7
    $7
fi

if [ $# -gt 7 ]; then
    echo $8
    $8
fi

if [ $# -gt 8 ]; then
    echo $9
    $9
fi
npm test
