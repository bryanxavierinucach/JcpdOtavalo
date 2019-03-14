const db = require('../config/db.config.js');
const Casos = db.casos;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Casos.create({
        proco_id: req.body.proco_id,
        tda_id: req.body.tda_id,
        dav_id: req.body.dav_id,
        tdenun_id: req.body.tdenun_id,
        caso_numcaso: req.body.caso_numcaso,
        caso_motivo: req.body.caso_motivo,
        caso_observaciones: req.body.caso_observaciones,
        caso_fechareg: req.body.caso_fechareg,
        caso_fechaingreso: req.body.caso_fechaingreso

    }).then(t_casos => {
        // Send created customer to client
        res.send(t_casos);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Casos.findAll().then(casos => {
        // Send all customers to Client
        res.send(casos);
    });
};