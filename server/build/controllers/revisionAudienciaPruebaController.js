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
class RevisionAudienciaPruebaController {
    // Listar todos los revisionAudienciaPrueba
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const revisionAudienciaPrueba = yield database_1.default.query('SELECT * FROM t_revision_audiencia_prueba');
            res.json(revisionAudienciaPrueba);
        });
    }
    //Listar solo un revisionAudienciaPrueba por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const revisionAudienciaPrueba = yield database_1.default.query('SELECT * FROM t_revision_audiencia_prueba WHERE raup_id = ? ', [id]);
            if (revisionAudienciaPrueba.length > 0) {
                return res.json(revisionAudienciaPrueba[0]);
            }
            res.status(404).json({ text: "la revisionAudienciaPrueba no existe" });
        });
    }
    //Crear una revisionAudienciaPrueba
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_revision_audiencia_prueba set ?', [req.body]);
            res.json({ message: 'Creando una revisionAudienciaPrueba' });
        });
    }
    //Actualizar una revisionAudienciaPrueba por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_revision_audiencia_prueba set ? WHERE raup_id = ?', [req.body, id]);
            res.json({ message: 'La revisionAudienciaPrueba fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una revisionAudienciaPrueba por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_revision_audiencia_prueba WHERE raup_id = ?', [id]);
            res.json({ message: 'La revisionAudienciaPrueba ha sido eliminado' });
        });
    }
}
exports.revisionAudienciaPruebaController = new RevisionAudienciaPruebaController();
exports.default = exports.revisionAudienciaPruebaController;
