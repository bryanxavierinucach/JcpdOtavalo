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
class DenuncianteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const denunciante = yield database_1.default.query('SELECT * FROM t_denunciante');
            res.json({ denunciante });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const denunciante = yield database_1.default.query('SELECT * FROM t_denunciante WHERE dden_id = ? ', [id]);
            if (denunciante.length > 0) {
                return res.json(denunciante[0]);
            }
            res.status(404).json({ text: "el juego no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_denunciante set ?', [req.body]);
            res.json({ message: 'Creando un caso' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_denunciante WHERE dden_id = ?', [id]);
            res.json({ message: 'el denunciante ha sido eliminado' });
        });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE t_denunciante set ? WHERE dden_id ?', [req.body, id]);
        res.json({ message: 'El caso fue Actualizando' + req.params.id });
    }
}
exports.denuncianteController = new DenuncianteController();
exports.default = exports.denuncianteController;
