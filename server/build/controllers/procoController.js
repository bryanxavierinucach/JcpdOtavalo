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
class ProcoController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const proco = yield database_1.default.query('SELECT * FROM t_procesamiento_conocimiento  ');
            res.json(proco);
        });
    }
    // Listar un procesamiento de conocimiento
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const proco = yield database_1.default.query('SELECT proco_id, proco_nombre FROM t_procesamiento_conocimiento WHERE proco_id = ? ', [id]);
            if (proco.length > 0) {
                return res.json(proco[0]);
            }
            res.status(404).json({ text: "el procesamiento no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
}
exports.procoController = new ProcoController();
exports.default = exports.procoController;
