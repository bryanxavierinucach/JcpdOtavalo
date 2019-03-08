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
class MedidasEmergentesController {
    // Listar todos los medidasEmergentes
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const medidasEmergentes = yield database_1.default.query('SELECT * FROM t_medidas_emergentes');
            res.json(medidasEmergentes);
        });
    }
    //Listar solo un medidasEmergentes por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const medidasEmergentes = yield database_1.default.query('SELECT * FROM t_medidas_emergentes WHERE me_id = ? ', [id]);
            if (medidasEmergentes.length > 0) {
                return res.json(medidasEmergentes[0]);
            }
            res.status(404).json({ text: "la medidasEmergentes no existe" });
        });
    }
    //Crear una medidasEmergentes
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_medidas_emergentes set ?', [req.body]);
            res.json({ message: 'Creando una medidasEmergentes' });
        });
    }
    // Actualizar una medidasEmergentes por ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_medidas_emergentes set ? WHERE me_id = ?', [req.body, id]);
            res.json({ message: 'La medidasEmergentes fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una medidasEmergentes por ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_medidas_emergentes WHERE me_id = ?', [id]);
            res.json({ message: 'La medidasEmergentes ha sido eliminado' });
        });
    }
}
exports.medidasEmergentesController = new MedidasEmergentesController();
exports.default = exports.medidasEmergentesController;
