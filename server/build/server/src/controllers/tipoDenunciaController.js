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
class TipoDenunciaController {
    // Listar todos los tipoDenuncia
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoDenuncia = yield database_1.default.query("SELECT * FROM t_tipo_denuncia");
            res.json(tipoDenuncia);
        });
    }
    //Listar solo un tipoDenuncia por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tipoDenuncia = yield database_1.default.query("SELECT * FROM t_tipo_denuncia WHERE tdenun_id = ? ", [id]);
            if (tipoDenuncia.length > 0) {
                return res.json(tipoDenuncia[0]);
            }
            res.status(404).json({ text: "la tipoDenuncia no existe" });
        });
    }
}
exports.tipoDenunciaController = new TipoDenunciaController();
exports.default = exports.tipoDenunciaController;
