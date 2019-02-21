"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoCasosController_1 = __importDefault(require("../controllers/tipoCasosController"));
class TipoCasosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoCasosController_1.default.list);
        this.router.get('/:id', tipoCasosController_1.default.getOne);
    }
}
const tipoCasosRoutes = new TipoCasosRoutes();
exports.default = tipoCasosRoutes.router;
