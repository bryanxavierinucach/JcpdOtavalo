"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parroquiasController_1 = __importDefault(require("../controllers/parroquiasController"));
class ParroquiasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', parroquiasController_1.default.list);
        this.router.get('/:id', parroquiasController_1.default.getOne);
        this.router.post('/', parroquiasController_1.default.create);
        this.router.put('/:id', parroquiasController_1.default.update);
        this.router.delete('/:id', parroquiasController_1.default.delete);
    }
}
const parroquiasRoutes = new ParroquiasRoutes();
exports.default = parroquiasRoutes.router;
