"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const revisionAudienciaPruebaController_1 = __importDefault(require("../controllers/revisionAudienciaPruebaController"));
class RevisionAudienciaPruebaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', revisionAudienciaPruebaController_1.default.list);
        this.router.get('/:id', revisionAudienciaPruebaController_1.default.getOne);
        this.router.post('/', revisionAudienciaPruebaController_1.default.create);
        this.router.put('/:id', revisionAudienciaPruebaController_1.default.update);
        this.router.delete('/:id', revisionAudienciaPruebaController_1.default.delete);
    }
}
const revisionAudienciaPruebaRoutes = new RevisionAudienciaPruebaRoutes();
exports.default = revisionAudienciaPruebaRoutes.router;
