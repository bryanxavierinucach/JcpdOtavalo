"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audienciaController_1 = __importDefault(require("../controllers/audienciaController"));
class AudienciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', audienciaController_1.default.list);
        this.router.get('/:id', audienciaController_1.default.getOne);
        this.router.post('/', audienciaController_1.default.create);
        this.router.put('/:id', audienciaController_1.default.update);
        this.router.delete('/:id', audienciaController_1.default.delete);
    }
}
const audienciaRoutes = new AudienciaRoutes();
exports.default = audienciaRoutes.router;
