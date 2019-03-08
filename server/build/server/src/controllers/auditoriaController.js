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
class AuditoriaController {
    // Listar todos los auditoria
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auditoria = yield database_1.default.query('SELECT * FROM t_auditoria');
            res.json(auditoria);
        });
    }
    //Listar solo un auditoria por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const auditoria = yield database_1.default.query('SELECT * FROM t_auditoria WHERE audi_id = ? ', [id]);
            if (auditoria.length > 0) {
                return res.json(auditoria[0]);
            }
            res.status(404).json({ text: "la auditoria no existe" });
        });
    }
    //Crear una auditoria
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_auditoria set ?', [req.body]);
            res.json({ message: 'Creando una auditoria' });
        });
    }
    //Actualizar una auditoria por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_auditoria set ? WHERE audi_id = ?', [req.body, id]);
            res.json({ message: 'La auditoria fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una auditoria por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_auditoria WHERE audi_id = ?', [id]);
            res.json({ message: 'La auditoria ha sido eliminado' });
        });
    }
}
exports.auditoriaController = new AuditoriaController();
exports.default = exports.auditoriaController;
