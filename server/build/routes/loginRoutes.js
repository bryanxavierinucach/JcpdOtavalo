"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User = require('../auth/auth.controller.js');
class LoginRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/login', User.loginUser);
    }
}
const loginRoutes = new LoginRoutes();
exports.default = loginRoutes.router;
