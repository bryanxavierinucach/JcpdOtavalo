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
class AvocatoriaController {
    // Listar todos los avocatoria
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const avocatoria = yield database_1.default.query('SELECT * FROM t_avocatoria');
            res.json(avocatoria);
        });
    }
    //Listar solo un avocatoria por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const avocatoria = yield database_1.default.query('SELECT * FROM t_avocatoria WHERE avo_id = ? ', [id]);
            if (avocatoria.length > 0) {
                return res.json(avocatoria[0]);
            }
            res.status(404).json({ text: "la avocatoria no existe" });
        });
    }
    //Crear una avocatoria
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_avocatoria set ?', [req.body]);
            res.json({ message: 'Creando una avocatoria' });
        });
    }
    // Actualizar una avocatoria por ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_avocatoria set ? WHERE avo_id = ?', [req.body, id]);
            res.json({ message: 'La avocatoria fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una avocatoria por ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_avocatoria WHERE avo_id = ?', [id]);
            res.json({ message: 'La avocatoria ha sido eliminado' });
        });
    }
}
exports.avocatoriaController = new AvocatoriaController();
exports.default = exports.avocatoriaController;
