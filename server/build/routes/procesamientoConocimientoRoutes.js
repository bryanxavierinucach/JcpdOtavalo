"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const procesamientoConocimientoController_1 = __importDefault(require("../controllers/procesamientoConocimientoController"));
class ProcesamientoConocimientoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', procesamientoConocimientoController_1.default.getAll);
        this.router.get('/:id', procesamientoConocimientoController_1.default.getOne);
    }
}
const procesamientoConocimientoRoutes = new ProcesamientoConocimientoRoutes();
exports.default = procesamientoConocimientoRoutes.router;
