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
class DenunciadoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const denunciado = yield database_1.default.query('SELECT * FROM t_denunciado');
            res.json({ denunciado });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const denunciado = yield database_1.default.query('SELECT * FROM t_denunciado WHERE dag_id = ? ', [id]);
            if (denunciado.length > 0) {
                return res.json(denunciado[0]);
            }
            res.status(404).json({ text: "el DENUNCIADO no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
    // Crear un nuevo DENUNCIADO
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_denunciado set ?', [req.body]);
            res.json({ message: 'Creando un caso' });
        });
    }
    //Eliminar un DENUNCIADO POR ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_denunciado WHERE dag_id = ?', [id]);
            res.json({ message: 'El juego ha sido eliminado' });
        });
    }
    //Actualizar datos del denunciado por el ID
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE t_denunciado set ? WHERE dag_id ?', [req.body, id]);
        res.json({ message: 'El caso fue Actualizando' + req.params.id });
    }
}
exports.denunciadoController = new DenunciadoController();
exports.default = exports.denunciadoController;
