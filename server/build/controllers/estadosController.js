"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EstadosController {
    // Listar todos los estados
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const estados = yield database_1.default.query('SELECT * FROM t_estados');
            res.json(estados);
        });
    }
    //Listar solo un estados por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const estados = yield database_1.default.query('SELECT * FROM t_estados WHERE est_id = ? ', [id]);
            if (estados.length > 0) {
                return res.json(estados[0]);
            }
            res.status(404).json({ text: "el estado no existe" });
        });
    }
}
exports.estadosController = new EstadosController();
exports.default = exports.estadosController;
