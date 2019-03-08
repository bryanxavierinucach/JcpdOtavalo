"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoDenunciaController_1 = __importDefault(require("../controllers/tipoDenunciaController"));
class TipoDenunciaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tipoDenunciaController_1.default.list);
        this.router.get('/:id', tipoDenunciaController_1.default.getOne);
    }
}
const tipoDenunciaRoutes = new TipoDenunciaRoutes();
exports.default = tipoDenunciaRoutes.router;
