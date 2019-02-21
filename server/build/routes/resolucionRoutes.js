"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resolucionController_1 = __importDefault(require("../controllers/resolucionController"));
class ResolucionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', resolucionController_1.default.list);
        this.router.get('/:id', resolucionController_1.default.getOne);
        this.router.post('/', resolucionController_1.default.create);
        this.router.put('/:id', resolucionController_1.default.update);
        this.router.delete('/:id', resolucionController_1.default.delete);
    }
}
const resolucionRoutes = new ResolucionRoutes();
exports.default = resolucionRoutes.router;
