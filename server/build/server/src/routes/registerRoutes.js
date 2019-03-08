"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User = require('../auth/auth.controller.js');
class RegisterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', User.createUser);
    }
}
const registerRoutes = new RegisterRoutes();
exports.default = registerRoutes.router;
