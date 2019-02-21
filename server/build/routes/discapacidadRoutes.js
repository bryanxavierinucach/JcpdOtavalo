"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discapacidadController_1 = require("./../controllers/discapacidadController");
const express_1 = require("express");
class DiscapacidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', discapacidadController_1.discapacidadController.list);
        this.router.get('/:id', discapacidadController_1.discapacidadController.getOne);
    }
}
const discapacidadRoutes = new DiscapacidadRoutes();
exports.default = discapacidadRoutes.router;
