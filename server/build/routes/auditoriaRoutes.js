"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auditoriaController_1 = __importDefault(require("../controllers/auditoriaController"));
class AuditoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', auditoriaController_1.default.list);
        this.router.get('/:id', auditoriaController_1.default.getOne);
        this.router.post('/', auditoriaController_1.default.create);
        this.router.put('/:id', auditoriaController_1.default.update);
        this.router.delete('/:id', auditoriaController_1.default.delete);
    }
}
const auditoriaRoutes = new AuditoriaRoutes();
exports.default = auditoriaRoutes.router;
