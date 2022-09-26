# StoreFront Backend Project

## Installation
### All Packages are installed using npm and yarn add
>- express: `npm i express`
>- dotenv: `npm i dotenv && npm i @types/dotenv`
>- bcrypt: `npm i bcrypt && npm i --save-dev @types/bcrypt`
>- body-parser: `npm i body-parser`
>- `npm i db-migrate` && `npm i db-migrate-pg`
>- `npm i jsonwebtoken` && `npm i --save-dev @types/jsonwebtoken`
>- `npm i pg` && `npm i --save-dev @types/pg`
>- `npm i --save-dev supertest` && `npm i --save-dev @types/supertest`
>- `npm i --save-dev jasmine` && `npm i --save-dev @types/jasmine`
>- `npm i --save-dev jasmine-spec-reporter` && `npm i --save-dev jasmine-ts`  
>- `npm i --save-dev tsc-watch` && `npm i --save-dev ts-node`

## Environment variables:

POSTGRES_HOST = 127.0.0.1
POSTGRES_DB = shopping
POSTGRES_DB_TEST = shopping_test
POSTGRES_USER = shopping_user
POSTGRES_PASSWORD = password123
ENV = dev
BCRYPT_PASSWPRD=this-secret-password
TOKEN_SECRET=simple-example-token
SALT_ROUNDS=10

## Database
>- `CREATE DATABASE shopping`;
>-`CREATE DATABASE shopping`;
>- `CREATE USER shopping_user WITH PASSWORD 'password123`;
>- `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user`;
>-`GRANT ALL PRIVILEGES ON DATABASE shopping_test TO shopping_user`;

## Migration

>- to run migration up : `npm run migrate`
>- to run migration down : `npm run demigrate`

## Models

>- Models are created inside src directory, and there are 3 models : Users, Product and Orders

## Express Handlers

>- Models are created inside the handler directory in src directory, and there are 3 handlers : Users, Product and Orders

## JWTs

>- Token used in all endpoints specified in the requirement
>- Bearer tokens are used for Authorization and passed within requests header
//**********************************

## Testing

>- Handlers are created in the the tests directory inside src directory.
>- forrunning tests use: `npm run test`

## Ports

>- Database port number i 5432
>- Server port number is 3000

## Application running:

>- GET: http://localhost:3000/Product
>- GET: http://localhost:3000/Product/:id
>- POST: http://localhost:3000/Product
>- GET: http://localhost:3000/Users
>- GET: http://localhost:3000/Users/:id
>- POST: http://localhost:3000/Users
>- GET: http://localhost:3000/Orders/:id