# Base Service Template

*This project was bootstrapped with the base microservice template designed by [Santos O. Martínez Braña](https://github.com/SantosOMartinez).*

## Before Installation

You should have [Node.JS, npm](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed, If not then follow the provided links to install the proper versions.

## Installation

**Make sure you are in the right directory in the terminal! You should be in the projects directory, in this case `Team-F\BackEnd\Services\base`**

To get started with this project you will need to run the following commands:

### `npm ci`

This will fetch all the dependencies. We prefer to use this command over `npm install` because creates a deterministic, repeatable build. This ensures that we are all running the same versions of packages.

## Environment Variables

To run this program you need to have a file named `.env` at the root of the project, which will contain all of the environment variables. 

#### **Note: This file should not go to the github repo and can change based on production and development environments.** 

A list of the currently used variables below:

| Variable | Description |
| -------- | ----------- |

`To be announced`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3999](http://localhost:3999) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner. See the [Jest](https://jestjs.io/) documentation for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It removes all TypeScript files and generates native JavaScript based on the source code.

Your service is ready to be deployed!

### `yarn start`

This command is to be used once the production build of the code is generated. It will run the code located in the `build` folder. This version does not hot reload unlike the `yarn dev` command.

### `yarn gql-gen`

When the GraphQL schema is edited you will have to run this command to generate the updated type definitions of the resolvers.

**It is not required to run after install. Only when a change to the schema is made**

## Docker
To use this service in production mode you need to create the docker image version of the build.

### `make up`

Will create a docker image and run the service in a docker container in development mode. Has hot reload enabled.

*Does not build the service in production mode.*

### `make up-prod`

Will create a docker image and run the service in a docker container in production mode. Hot reload is disabled. Will build the application as production mode.

### `make down`

Will shut down and remove the docker container and image that was created with `make up` or `make up-prod`.

### `make docker-build`

Builds the docker image of the service.

*No need to run this, it is already included on the other make commands.*