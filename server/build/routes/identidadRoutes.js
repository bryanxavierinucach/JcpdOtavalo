"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const identidadController_1 = __importDefault(require("../controllers/identidadController"));
class IdentidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', identidadController_1.default.list);
        this.router.get('/:id', identidadController_1.default.getOne);
    }
}
const identidadRoutes = new IdentidadRoutes();
exports.default = identidadRoutes.router;
