"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoPersonaController_1 = __importDefault(require("../controllers/tipoPersonaController"));
class TipoPersonaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoPersonaController_1.default.list);
        this.router.get('/:id', tipoPersonaController_1.default.getOne);
    }
}
const tipoPersonaRoutes = new TipoPersonaRoutes();
exports.default = tipoPersonaRoutes.router;
