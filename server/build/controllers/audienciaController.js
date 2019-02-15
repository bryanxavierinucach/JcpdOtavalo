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
class AudienciaController {
    // Listar todos los audiencia
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const audiencia = yield database_1.default.query('SELECT * FROM t_audiencia');
            res.json(audiencia);
        });
    }
    //Listar solo un afectado por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const audiencia = yield database_1.default.query('SELECT * FROM t_audiencia WHERE rau_id = ? ', [id]);
            if (audiencia.length > 0) {
                return res.json(audiencia[0]);
            }
            res.status(404).json({ text: "el juego no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_audiencia set ?', [req.body]);
            res.json({ message: 'Creando una audiencia' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_audiencia set ? WHERE rau_id = ?', [req.body, id]);
            res.json({ message: 'La audiencia fue Actualizando' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_audiencia WHERE rau_id = ?', [id]);
            res.json({ message: 'La audiencia ha sido eliminado' });
        });
    }
}
exports.audienciaController = new AudienciaController();
exports.default = exports.audienciaController;
