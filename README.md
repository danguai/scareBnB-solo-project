ScareBnB it's a AirBnB clone but with a twist... Only haunted houses for you to stay in.

Users of the app will be able to sign up or log in, create their own haunted house to stay and review haunted houses of other people. If time allows it, you may be able to also booked your next stay.

# BACKEND
BE.1. Go to your backend folder and...
```js
cd backend
```
* npm install
* create a .env file with the following:
```js
PORT=5001
DB_USERNAME=scarebnb_app
DB_PASSWORD=«choose_strong_password»
DB_DATABASE=scarebnb_db
DB_HOST=localhost
JWT_SECRET=«generate_strong_secret_here»
JWT_EXPIRES_IN=604800
```
* create a new user in postgres with a password and CREATEDB:
```js
create user scarebnb_app with password '«choose_strong_password»' createdb;
```
* generate a JWT secret by using the following line of code in a node terminal:
```js
require("crypto").randomBytes(32).toString("hex");
```
* copy and paste into your .env file after JWT_SECRET=<the generated code>

BE.2. create, migrate, and seed your database:
```js
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
```
# FRONTEND
FE.1. Go to your frontend folder and...
```js
cd ../frontend
```
* npm install

FE.2. Start up your backend server with:
```js
npm start
```
- You should see your terminal show the server running on localhost:5001

FE.3. Start up your frontend server with:
```js
npm start
```
- Your browser should open up the app at localhost:3000

# Live App
- You can log in with demo user
- You can create a new user
- You can log in with a previous created user
git push
