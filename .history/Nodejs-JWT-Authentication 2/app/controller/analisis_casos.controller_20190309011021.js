const db = require('../config/db.config.js');
const AnalisisCasos = db.analisisCasos;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    AnalisisCasos.create({

        caso_id: req.body.caso_id,
        tica_id: req.body.tica_id,
        anc_observacion: req.body.anc_observacion

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