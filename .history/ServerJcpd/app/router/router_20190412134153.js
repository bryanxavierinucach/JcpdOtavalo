const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

    const controller = require('../controller/controller.js');
    const customers = require('../controller/customer.controller.js');
    const casos = require('../controller/casos.controller.js');
    const analisisCasos = require('../controller/analisis_casos.controller.js');
    const audiencia = require('../controller/audiencia.controller.js');
    const audienciaprueba = require('../controller/audienciaprueba.controller.js');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

    app.post('/api/auth/signin', controller.signin);

    app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

    app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], controller.managementBoard);

    app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

    // Create a new Customer
    app.post('/api/customers', [authJwt.verifyToken], customers.create);

    // Retrieve all Customer
    app.get('/api/customers', [authJwt.verifyToken], customers.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/customers/:customerId', [authJwt.verifyToken], customers.findById);

    // Update a Customer with Id
    app.put('/api/customers/:customerId', [authJwt.verifyToken], customers.update);

    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', [authJwt.verifyToken], customers.delete);



    // CRUD CASOS
    app.post('/api/casos', casos.create);
    app.get('/api/casos', casos.findAll);
    app.get('/api/casos/:casosId', casos.findById);
    app.put('/api/casos/:casosId', casos.update);
    app.delete('/api/casos/:casosId', casos.delete);



    // CRUD ANALISIS CASOS
    app.post('/api/analisisCasos', analisisCasos.create);
    app.get('/api/analisisCasos', analisisCasos.findAll);

    //CRUD AUDIENCIA
    app.post('/api/audiencia', audiencia.create);
    app.get('/api/audiencia', audiencia.findAll);

    //CRUD PROCESAMIENTO DE CONOCIMIENTO

    app.post('/api/audienciaprueba', audienciaprueba.create);
    app.get('/api/audienciaprueba', audienciaprueba.findAll);
    app.get('/api/audienciaprueba/:audienciapruebaId', audienciaprueba.findById);

}