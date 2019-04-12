const db = require('../config/db.config.js');
const Audienciaprueba = db.audienciapruebas;
// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Audienciaprueba.create({

        caso_id: req.body.caso_id,
        rau_id: req.body.rau_id,
        apr_fecha_avocatoria_caso: req.body.apr_fecha_avocatoria_caso,
        apr_fecha_resgistro_caso: req.body.apr_fecha_resgistro_caso,
        apr_fecha_audienciap: req.body.apr_fecha_audienciap,
        apr_hora_audienciap: req.body.apr_hora_audienciap,
        apr_observacion: req.body.apr_observacion,
        apr_resumen_audiencia: req.body.apr_resumen_audiencia,
        apr_conciliacion: req.body.apr_conciliacion


    }).then(audienciaprueba => {
        // Send created customer to client
        res.send(audienciaprueba);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Audienciaprueba.findAll().then(audienciapruebas => {
        // Send all customers to Client
        res.send(audienciapruebas);
    });
};
// Find a Customer by Id
exports.findById = (req, res) => {
    Audienciaprueba.findById(req.params.audienciapruebaId).then(audienciaprueba => {
        res.send(audienciaprueba);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.customerId;
    Customer.update({ firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, { where: { id: req.params.customerId } }).then(() => {
        res.status(200).send("updated successfully a customer with id = " + id);
    });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.customerId;
    Customer.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};