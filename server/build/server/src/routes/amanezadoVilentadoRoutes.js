"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const amanezadoVilentadoController_1 = __importDefault(require("../controllers/amanezadoVilentadoController"));
class AmanezadoVilentadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', amanezadoVilentadoController_1.default.list);
        this.router.get('/:id', amanezadoVilentadoController_1.default.getOne);
    }
}
const amanezadoVilentadoRoutes = new AmanezadoVilentadoRoutes();
exports.default = amanezadoVilentadoRoutes.router;
