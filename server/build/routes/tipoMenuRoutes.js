"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoMenuController_1 = __importDefault(require("../controllers/tipoMenuController"));
class TipoMenuRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoMenuController_1.default.list);
        this.router.get('/:id', tipoMenuController_1.default.getOne);
    }
}
const tipoMenuRoutes = new TipoMenuRoutes();
exports.default = tipoMenuRoutes.router;
