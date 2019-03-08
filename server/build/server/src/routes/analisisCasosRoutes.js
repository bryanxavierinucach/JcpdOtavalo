"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analisisCasosController_1 = __importDefault(require("../controllers/analisisCasosController"));
class AnalisisCasosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', analisisCasosController_1.default.list);
        this.router.get('/:id', analisisCasosController_1.default.getOne);
        this.router.post('/', analisisCasosController_1.default.create);
        this.router.put('/:id', analisisCasosController_1.default.update);
        this.router.delete('/:id', analisisCasosController_1.default.delete);
    }
}
const analisisCasosRoutes = new AnalisisCasosRoutes();
exports.default = analisisCasosRoutes.router;
