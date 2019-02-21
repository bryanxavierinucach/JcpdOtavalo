"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposMedidasController_1 = __importDefault(require("../controllers/tiposMedidasController"));
class TiposMedidasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tiposMedidasController_1.default.list);
        this.router.get('/:id', tiposMedidasController_1.default.getOne);
    }
}
const tiposMedidasRoutes = new TiposMedidasRoutes();
exports.default = tiposMedidasRoutes.router;
