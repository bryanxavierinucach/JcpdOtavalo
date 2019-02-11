var routes = require('express').Router(); //create instance of express routes
var userRoute = require('./routes/user.route'); //path to the routes/user.routes.js 
routes.use('/user', userRoute); //redirect user's routes
module.exports = routes; //export express routes