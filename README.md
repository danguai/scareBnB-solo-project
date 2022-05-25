# S C A R E B N B
ScareBnB it's a AirBnB clone but with a twist... Only haunted houses for you to stay in.

Users of the app will be able to sign up or log in, create their own haunted house to stay and review haunted houses of other people. If time allows it, you may be able to also booked your next stay.

# GETTING STARTED
Clone this repo
```
git clone https://github.com/danguai/scareBnB-solo-project.git
```

# BACKEND
BE [ 1 ]  Go to your backend folder...
```js
cd backend
```
...and install dependencies.
* npm install

BE [ 2 ]  Applications environment constants
* Create a .env file with the following:
```js
PORT=«choose_port_number»
DB_USERNAME=scarebnb_app
DB_PASSWORD=«choose_strong_password»
DB_DATABASE=scarebnb_db
DB_HOST=localhost
JWT_SECRET=«choose_strong_password»
JWT_EXPIRES_IN=604800
```
BE [ 3 ]  Postgres S Q L
* Create a new user in postgres with a password and CREATEDB:
```js
create user scarebnb_app with password '«choose_strong_password»' createdb;
```
* generate a JWT secret by using the following line of code in a node terminal:
```js
require("crypto").randomBytes(32).toString("hex");
```
* copy and paste into your .env file after JWT_SECRET=<the generated code>

BE [ 4 ] create, migrate, and seed your database:
```js
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
FE [ 5 ] Start up your backend server with:
```js
npm start
```
- You should see your terminal show the server running on localhost:«choose_port_number»

# FRONTEND

FE [ 1 ] Add the following proxy to the package.json in your frontend directory
  "proxy": "http://localhost:«choose_port_number»"

FE [ 2 ] Go to your frontend folder and...
```js
cd ../frontend
```
* npm install

FE [ 3 ] Start up your frontend server with:
```js
npm start
```
- Your browser should open up the app at localhost:3000

# L I V E _ A P P
- You can log in with demo user
- You can create a new user
- You can log in with a previous created user

# FEATURES

Logged in users can perform the following actions:
- Create | Read | Update | Delete PLACES
- Create | Read | Update | Delete REVIEWS
