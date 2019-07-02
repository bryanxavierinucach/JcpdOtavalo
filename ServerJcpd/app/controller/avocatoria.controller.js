const db = require('../config/db.config.js');
const Avocatoria = db.avocatoria;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Avocatoria.create({

        anc_id: req.body.anc_id,
        avo_fecha_conciliacion: req.body.avo_fecha_conciliacion,
        avo_observaciones: req.body.avo_observaciones,
        avo_hora_audiencia: req.body.avo_hora_audiencia


    }).then(t_avocatoria => {
        // Send created customer to client
        res.send(t_avocatoria);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Avocatoria.findAll().then(avocatoria => {
        // Send all customers to Client
        res.send(avocatoria);
    });
};