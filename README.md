# Puppeteer

This repository is for a headless Chrome image that can be launched via puppeteer (baked into the image) and then controlled via port with puppeteer-core.

## Installing and publishing a specific version

- run `npm i puppeteer@{version}`
- commit changed package lock file
- create a PR and tag it with `v{version}` for example `v9.1.1`

## Launching browser with additional arguments

The first argument given to the container is parsed as JSON and merged into pre-set options of [puppeteer.launch](https://github.com/puppeteer/puppeteer/blob/v9.1.1/docs/api.md#puppeteerlaunchoptions) command

- `docker build . -t pup:example && docker run pup:example '{"args":["--{argumentName}", ...], "{optionName}": {value}, ...}'`
