"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medidasProteccionArtController_1 = __importDefault(require("../controllers/medidasProteccionArtController"));
class MedidasProteccionArtRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', medidasProteccionArtController_1.default.list);
        this.router.get('/:id', medidasProteccionArtController_1.default.getOne);
    }
}
const medidasProteccionArtRoutes = new MedidasProteccionArtRoutes();
exports.default = medidasProteccionArtRoutes.router;
