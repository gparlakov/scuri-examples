#!/bin/bash
# $1 ng cli version for
NG_VERSION=$1
# $2 scuri version
SCURI_VERSION=$2
# $3 node version
NODE_VERSION=$3


docker build "--build-arg=CLI_VERSION=$NG_VERSION" "--build-arg=NG_NEW_NAME=test-scuri-ng$NG_VERSION-app" --build-arg=NODE_VERSION="$NODE_VERSION" -f ./scuri-test-context/Dockerfile_with_chrome_headless -t="gparlakov/scuri:angular-$NG_VERSION-app-v1" ./scuri-test-context/
docker run -t --entrypoint ./run.sh --rm "gparlakov/scuri:angular-$NG_VERSION-app-v1" "$SCURI_VERSION"
