# Notetaking RESTful API

Live API --> https://reach-engine-server.herokuapp.com/api

## Installation for Development
- Set up a local postgres database: `createdb NAME_OF_DB`
- Install dependencies: `npm install`
- Install knex : `npm install knex -g` *if you don't already have knex installed globaly already*
- Migrate and Seed the database: `knex migrate:latest && knex seed:run`
- Start up your server: `nodemon`
- Go to port 3000 in your browser

## Deploying to Heroku
- Set up Heroku app: `heroku apps:create NAME_OF_APP`
- Set up Heroku postgres database: `heroku addons:create heroku-postgresql`
- Create a `.env` file, using the `dotenv-example` file as a guide
- Migrate the heroku database: `knex migrate:latest --env production`
- Seed the heroku database: `knex seed:run --env production`

## Curl commands for API
##### Create a New Note
- `curl -i -H "Content-Type: application/json" -X POST -d '{"body" : "Pick up milk!"}' http://localhost:3000/api/notes`
##### Get an Existing Note
- ` curl -i -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes/1`
##### Get All of my Notes
- ` curl -i -H "Content-Type: application/json" -X GET http://localhost:3000/api/notes`
##### Search Notes by their bodies: query paramater
- `curl -i -H "Content-Type: application/json" -X POST -d '{"body" : "Pick up milk!"}' http://localhost:3000/api/notes`
