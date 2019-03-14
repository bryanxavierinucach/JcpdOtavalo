const db = require('../config/db.config.js');
const Audiencia = db.audiencia;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    Audiencia.create({

        caso_id: req.body.caso_id,
        rau_fecha_conciliacion: req.body.rau_fecha_conciliacion,
        rau_hora_audiencia: req.body.rau_hora_audiencia,
        rau_observacion: req.body.rau_observacion,
        rau_resumen: req.body.rau_resumen,
        rau_conciliacion: req.body.rau_conciliacion


    }).then(t_audiencia => {
        // Send created customer to client
        res.send(t_audiencia);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Audiencia.findAll().then(audiencia => {
        // Send all customers to Client
        res.send(audiencia);
    });
};