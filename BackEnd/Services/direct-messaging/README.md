# Direct Messaging Service

_This project was bootstrapped with the base microservice template designed by [Santos O. Martínez Braña](https://github.com/SantosOMartinez)._

## Before Installation

You should have [Node.JS, npm](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed, If not then follow the provided links to install the proper versions.

## Installation

**Make sure you are in the right directory in the terminal! You should be in the projects directory, in this case `Team-F\BackEnd\Services\base`**

To get started with this project you will need to run the following commands:

### `npm ci`

This will fetch all the dependencies. We prefer to use this command over `npm install` because creates a deterministic, repeatable build. This ensures that we are all running the same versions of packages.

### `yarn prisma-migrate`

Creates the database needed for development.

Install Prisma Client in your project with the following command:

### `npm install @prisma/client`

This command also runs the prisma generate command, which [generates the Prisma Client into the node_modules/.prisma/client directory.](https://www.google.com/search?q=cuid+vs+uuid&oq=cuid+vs+uuid&aqs=chrome..69i57.3354j0j1&sourceid=chrome&ie=UTF-8)

Should be run at the start to create the starting prisma dependencies.

## Environment Variables

To run this program you need to have a file named `.env` at the root of the project, which will contain all of the environment variables.

#### **Note: This file should not go to the github repo and can change based on production and development environments.**

A list of the currently used variables below:

| Variable     | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| DATABASE_URL | This is the url for the database that stores the users. (default: file:./messaging.db) |
| APP_SECRET   | Used in signing cookies. Should be kept a secret from the world 🌍.                    |

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

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

### `npx prisma migrate dev --preview-feature`

or

### `yarn prisma-migrate`

This should be run any time there are changes to the schema.prisma file to push any changes to the database.

### `npx prisma generate`

or

### `yarn prisma-generate`

This should also be run any time there is a change to the schema.prisma file so that prisma client gets updated with the changes.

## Docker

To use this service in production mode you need to create the docker image version of the build.

### `make up`

Will create a docker image and run the service in a docker container in development mode. Has hot reload enabled.

_Does not build the service in production mode._

### `make up-prod`

Will create a docker image and run the service in a docker container in production mode. Hot reload is disabled. Will build the application as production mode.

### `make down`

Will shut down and remove the docker container and image that was created with `make up` or `make up-prod`.

### `make docker-build`

Builds the docker image of the service.

_No need to run this, it is already included on the other make commands._
