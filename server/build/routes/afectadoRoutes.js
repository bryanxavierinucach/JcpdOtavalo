"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const afectadoController_1 = __importDefault(require("../controllers/afectadoController"));
class AfectadoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', afectadoController_1.default.list);
        this.router.get('/:id', afectadoController_1.default.getOne);
        this.router.post('/', afectadoController_1.default.create);
        this.router.put('/:id', afectadoController_1.default.update);
        this.router.delete('/:id', afectadoController_1.default.delete);
    }
}
const afectadoRoutes = new AfectadoRoutes();
exports.default = afectadoRoutes.router;
