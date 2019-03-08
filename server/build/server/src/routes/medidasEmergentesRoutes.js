"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medidasEmergentesController_1 = __importDefault(require("../controllers/medidasEmergentesController"));
class MedidasEmergenciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', medidasEmergentesController_1.default.list);
        this.router.get('/:id', medidasEmergentesController_1.default.getOne);
        this.router.post('/', medidasEmergentesController_1.default.create);
        this.router.put('/:id', medidasEmergentesController_1.default.update);
        this.router.delete('/:id', medidasEmergentesController_1.default.delete);
    }
}
const medidasEmergenciaRoutes = new MedidasEmergenciaRoutes();
exports.default = medidasEmergenciaRoutes.router;
