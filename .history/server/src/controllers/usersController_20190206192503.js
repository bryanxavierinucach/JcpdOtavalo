var response = require('./../general/MyResponse');
var messages = require('./../general/messages');
var logger = require('./../logs');
var config = require('./../database');
module.exports = {
    createUser: async(req, res) => {
        //create user
        var query = "INSERT INTO t_usuarios (" +
            "email, password ) " +
            "VALUES (?, ?)";

        var data = [req.body.email, req.body.password]
        try {
            var user = connection.query(query, data);
        } catch (err) {
            console.log("Error occurred : ", err.message);
            logger.error("Error", err.message);
            response.createResponse(res, 500, err.message, {}, {});
        }
        response.createResponse(res, 200, messages.USER_CREATED_SUCCESS, {}, {});
    },
};