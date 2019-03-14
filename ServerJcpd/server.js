var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())


const db = require('./app/config/db.config.js');
require('./app/router/router.js')(app);

// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

// Create a Server
var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

// function initial() {
//     Role.create({
//         id: 1,
//         name: "USER"
//     });

//     Role.create({
//         id: 2,
//         name: "PM"
//     });

//     Role.create({
//         id: 3,
//         name: "ADMIN"
//     });
// }