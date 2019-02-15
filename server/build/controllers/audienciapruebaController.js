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
class AudienciaPuebaController {
    // Listar todos los audienciaprueba
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const audienciaprueba = yield database_1.default.query('SELECT * FROM t_audienciaprueba');
            res.json(audienciaprueba);
        });
    }
    //Listar solo un afectado por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const audienciaprueba = yield database_1.default.query('SELECT * FROM t_audienciaprueba WHERE apr_id = ? ', [id]);
            if (audienciaprueba.length > 0) {
                return res.json(audienciaprueba[0]);
            }
            res.status(404).json({ text: "la audienciaprueba no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_audienciaprueba set ?', [req.body]);
            res.json({ message: 'Creando una audienciaprueba' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_audienciaprueba set ? WHERE apr_id = ?', [req.body, id]);
            res.json({ message: 'La audienciaprueba fue Actualizando' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_audienciaprueba WHERE apr_id = ?', [id]);
            res.json({ message: 'La audienciaprueba ha sido eliminado' });
        });
    }
}
exports.audienciaPuebaController = new AudienciaPuebaController();
exports.default = exports.audienciaPuebaController;
