"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const casosController_1 = __importDefault(require("../controllers/casosController"));
class CasosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', casosController_1.default.list);
        this.router.get('/:id', casosController_1.default.getOne);
        this.router.post('/', casosController_1.default.create);
        this.router.put('/:id', casosController_1.default.update);
        this.router.delete('/', casosController_1.default.listproco);
    }
}
const casosRoutes = new CasosRoutes();
exports.default = casosRoutes.router;
