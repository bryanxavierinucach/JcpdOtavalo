const db = require('../config/db.config.js');
const Audienciaprueba = db.audienciaprueba;

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


    }).then(t_audiencia => {
        // Send created customer to client
        res.send(t_audiencia);
    });
};
// FETCH all Customers
exports.findAll = (req, res) => {
    Audienciaprueba.findAll().then(audiencia => {
        // Send all customers to Client
        res.send(audiencia);
    });
};