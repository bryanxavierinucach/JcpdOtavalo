"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoDerechoAmenazasController_1 = __importDefault(require("../controllers/tipoDerechoAmenazasController"));
class TipoDerechoAmenazasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoDerechoAmenazasController_1.default.list);
        this.router.get('/:id', tipoDerechoAmenazasController_1.default.getOne);
    }
}
const tipoDerechoAmenazasRoutes = new TipoDerechoAmenazasRoutes();
exports.default = tipoDerechoAmenazasRoutes.router;
