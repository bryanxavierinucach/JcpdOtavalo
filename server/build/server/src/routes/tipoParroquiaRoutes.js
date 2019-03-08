"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoParroquiaController_1 = __importDefault(require("../controllers/tipoParroquiaController"));
class TipoParroquiaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoParroquiaController_1.default.list);
        this.router.get('/:id', tipoParroquiaController_1.default.getOne);
    }
}
const tipoParroquiaRoutes = new TipoParroquiaRoutes();
exports.default = tipoParroquiaRoutes.router;
