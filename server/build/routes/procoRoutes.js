"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const procoController_1 = __importDefault(require("../controllers/procoController"));
class ProcoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', procoController_1.default.getOne);
        this.router.get('/', procoController_1.default.getAll);
    }
}
const procoRoutes = new ProcoRoutes();
exports.default = procoRoutes.router;
