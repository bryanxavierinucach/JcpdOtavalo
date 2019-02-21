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
class ResolucionController {
    // Listar todos los resolucion
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resolucion = yield database_1.default.query('SELECT * FROM t_resolucion');
            res.json(resolucion);
        });
    }
    //Listar solo un resolucion por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resolucion = yield database_1.default.query('SELECT * FROM t_resolucion WHERE res_id = ? ', [id]);
            if (resolucion.length > 0) {
                return res.json(resolucion[0]);
            }
            res.status(404).json({ text: "la resolucion no existe" });
        });
    }
    //Crear una resolucion
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_resolucion set ?', [req.body]);
            res.json({ message: 'Creando una resolucion' });
        });
    }
    //Actualizar una resolucion por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_resolucion set ? WHERE res_id = ?', [req.body, id]);
            res.json({ message: 'La resolucion fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una resolucion por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_resolucion WHERE res_id = ?', [id]);
            res.json({ message: 'La resolucion ha sido eliminado' });
        });
    }
}
exports.resolucionController = new ResolucionController();
exports.default = exports.resolucionController;
