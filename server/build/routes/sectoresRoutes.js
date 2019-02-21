"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sectoresController_1 = __importDefault(require("../controllers/sectoresController"));
class SectoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sectoresController_1.default.list);
        this.router.get('/:id', sectoresController_1.default.getOne);
        this.router.post('/', sectoresController_1.default.create);
        this.router.put('/:id', sectoresController_1.default.update);
        this.router.delete('/:id', sectoresController_1.default.delete);
    }
}
const sectoresRoutes = new SectoresRoutes();
exports.default = sectoresRoutes.router;
