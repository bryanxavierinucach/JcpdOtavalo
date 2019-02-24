const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRECT_KEY = 'secretkey123456';

exports.createUser = (req, res, next) => {
    const newUser = {
        usu_id: req.body.usu_id,
        usu_nombre: req.body.usu_nombre,
        usu_apellido: req.body.usu_apellido,
        usu_nombre_usuario: req.body.usu_nombre_usuario,
        usu_password: req.body.usu_password,
    }

    User.create(newUser, (err, user) => {
        if (err) return res.status(500).send('SERVER ERROR');
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({
            id: user.usu_id
        }, SECRECT_KEY, {
            expiresIn: expiresIn
        });
        //response
        res.send({ user });
    })
}

exports.loginUser = (req, res, next) => {
    const userData = {
        usu_nombre_usuario: req.body.usu_nombre_usuario,
        usu_password: req.body.usu_password
    }
    User.findOne({
        usu_nombre_usuario: userData.usu_nombre_usuario

    }, (err, user) => {

        // usu_nombre_usuario no existe
        if (err) return res.status(500).send('SERVER ERROR!');
        if (!user) {
            res.status(409).send({ message: ' Something is wrong' });
        } else {
            const resultPassword = userData.usu_password;
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.usu_id }, SECRECT_KEY, { expiresIn: expiresIn });
                res.send({ userData });
            } else {
                // password wrong
                res.status(409).send({ message: ' Something is wrong' })

            }
        }
    })
}