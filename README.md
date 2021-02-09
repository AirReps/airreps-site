# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), 
a modern static website generator.

# Cloning this repository
It should've cloned all submodles out of the box, but if it didn't, add the `--recursive`
flag to your cloning statement.
* ex `git clone https://github.com/AirReps/airreps-site.git --recursive`

## Installation

```console
yarn install
```
_or_
```console
npm install
```

## Local Development

```console
yarn start
```
_or_
```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```
_or_
```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
> This command will build & deploy 

```console
GIT_USER=<Your GitHub username> USE_SSH=false yarn deploy
```