const db = require('../config/db.config.js');
const Proco = db.proco;

// FETCH all Customers
exports.findAll = (req, res) => {
    Proco.findAll().then(proco => {
        // Send all customers to Client
        res.send(proco);
    });
};
exports.findById = (req, res) => {
    Proco.findById(req.params.procoId).then(proco => {
        res.send(proco);
    })
};