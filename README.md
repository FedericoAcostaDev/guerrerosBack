# Getting Started with Create React App

this is an API project using node.js, Mern with a React.js front-end.

technologies used:
Multer is used for image storage
Axios to fetch data from mongodb
Mongodb for database

## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn build`

## Deployment

Deployed on Heroku

inside package.json i added

### "heroku-postbuild": "cd client && npm install && npm run build"

## fails with stability

-can't test on localhost!!
//fixed by puttin out the client folder on developer Branch.

-deployment lost connection to database:

### 2021-11-11T15:00:50.130843+00:00 heroku[router]: at=info method=GET path="/api/posts" host=guerrerosdelavihda.herokuapp.com request_id=7c280309-facb-48e1-9933-f24b34bd553f fwd="200.126.224.126" dyno=web.1 connect=0ms service=1ms status=500 bytes=226 protocol=https

posible solution taked from the tutorial:
'i also face that problem after that i put my code in try catch block and it worked'

-multer deletes uploaded files afte a moment
//maybe related to the above issue
-inside settings page data overwrites values (cleaning user data

)

## features to add

-fix resposivness
-Default profile pic
