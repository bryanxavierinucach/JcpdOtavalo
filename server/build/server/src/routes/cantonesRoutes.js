"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cantonesController_1 = __importDefault(require("../controllers/cantonesController"));
class CantonesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cantonesController_1.default.list);
        this.router.get('/:id', cantonesController_1.default.getOne);
    }
}
const cantonesRoutes = new CantonesRoutes();
exports.default = cantonesRoutes.router;
