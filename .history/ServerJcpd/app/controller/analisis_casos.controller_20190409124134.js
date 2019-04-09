const db = require('../config/db.config.js');
const AnalisisCasos = db.analisisCasos;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    AnalisisCasos.create({

        caso_id: req.body.caso_id,
        tica_id: req.body.tica_id,
        anc_observacion: req.body.anc_observacion

    }).then(t_analisis_casos => {
        // Send created customer to client
        res.send(t_analisis_casos);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    AnalisisCasos.findAll().then(analisisCasos => {
        // Send all customers to Client
        res.send(analisisCasos);
    });
};