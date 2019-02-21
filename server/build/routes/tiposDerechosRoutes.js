"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tiposDerechosController_1 = __importDefault(require("../controllers/tiposDerechosController"));
class TiposDerechosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tiposDerechosController_1.default.list);
        this.router.get('/:id', tiposDerechosController_1.default.getOne);
    }
}
const tiposDerechosRoutes = new TiposDerechosRoutes();
exports.default = tiposDerechosRoutes.router;
