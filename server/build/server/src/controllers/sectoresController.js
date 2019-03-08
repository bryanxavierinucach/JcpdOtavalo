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
class SectoresController {
    // Listar todos los sectores
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sectores = yield database_1.default.query('SELECT * FROM t_sectores');
            res.json(sectores);
        });
    }
    //Listar solo un sectores por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sectores = yield database_1.default.query('SELECT * FROM t_sectores WHERE sec_id = ? ', [id]);
            if (sectores.length > 0) {
                return res.json(sectores[0]);
            }
            res.status(404).json({ text: "la sectores no existe" });
        });
    }
    //Crear una sectores
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_sectores set ?', [req.body]);
            res.json({ message: 'Creando una sectores' });
        });
    }
    //Actualizar una sectores por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_sectores set ? WHERE sec_id = ?', [req.body, id]);
            res.json({ message: 'La sectores fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una sectores por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_sectores WHERE sec_id = ?', [id]);
            res.json({ message: 'La sectores ha sido eliminado' });
        });
    }
}
exports.sectoresController = new SectoresController();
exports.default = exports.sectoresController;
