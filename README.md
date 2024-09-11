# RECIPE API

## Project structure

All source code is inside `src/` folder.

The tests can be found inside `tests/` and the API documentation inside `docs/`. Multiple versions of the tests and the API documentation can be found to keep the API retrocompatible.

## Project architecture

This API runs in NodeJS. Current Node version can be found in `package.json` file.

## Run the API

To run the API, you have to add to your environnement all the environnement variables listed in `src/types/environment.d.ts`. You can also create a `.env` file based on `template.env`, it will be used automatically when you run the app.

Then, to run the API:

```
$ npm run dev
```

And it should start!

## Build the API

The API runs in TypeScript. You can build the API with these commands and start a Javascript server.
Please keep in mind that you need your environment populated with the variables.

```
$ npm run build
...
$ npm run start
```

## Running the tests locally

To run the tests locally, you just have to run :

```
$ npm run test
```

or if you want to run a single file :

```
$ npm run test -- 'path/to/file'
```
