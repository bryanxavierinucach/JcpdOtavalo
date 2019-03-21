const db = require('../config/db.config.js');
const Proco = db.proco;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Proco.create({

        proco_id: req.body.proco_id,
        proco_nombre: req.body.proco_nombre

    }).then(t_procesamiento_conocimiento => {
        // Send created customer to client
        res.send(t_procesamiento_conocimiento);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Proco.findAll().then(proco => {
        // Send all customers to Client
        res.send(proco);
    });
};