"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const denuncianteController_1 = __importDefault(require("../controllers/denuncianteController"));
class DenuncianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', denuncianteController_1.default.list);
        this.router.get('/:id', denuncianteController_1.default.getOne);
        this.router.post('/', denuncianteController_1.default.create);
        this.router.put('/:id', denuncianteController_1.default.update);
        this.router.delete('/:id', denuncianteController_1.default.delete);
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
exports.default = denuncianteRoutes.router;
