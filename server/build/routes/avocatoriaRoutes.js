"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avocatoriaController_1 = __importDefault(require("../controllers/avocatoriaController"));
class AvocatoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', avocatoriaController_1.default.list);
        this.router.get('/:id', avocatoriaController_1.default.getOne);
        this.router.post('/', avocatoriaController_1.default.create);
        this.router.put('/:id', avocatoriaController_1.default.update);
        this.router.delete('/:id', avocatoriaController_1.default.delete);
    }
}
const avocatoriaRoutes = new AvocatoriaRoutes();
exports.default = avocatoriaRoutes.router;
