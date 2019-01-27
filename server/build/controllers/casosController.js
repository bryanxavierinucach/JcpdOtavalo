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
class CasosController {
    // Listar todos los casos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const casos = yield database_1.default.query('SELECT * FROM t_casos');
            res.json(casos);
        });
    }
    //Listar solo un afectado por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const casos = yield database_1.default.query('SELECT * FROM t_casos WHERE caso_id = ? ', [id]);
            if (casos.length > 0) {
                return res.json(casos[0]);
            }
            res.status(404).json({ text: "el juego no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
    // Listar un procesamiento de conocimiento
    getOnePro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const proco = yield database_1.default.query('SELECT * FROM t_procesamiento_conocimiento WHERE proco_id = ? ', [id]);
            if (proco.length > 0) {
                return res.json(proco[0]);
            }
            res.status(404).json({ text: "el procesamiento no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
    listproco(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const proco = yield database_1.default.query('SELECT * FROM t_procesamiento_conocimiento');
            res.json(proco);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_casos set ?', [req.body]);
            res.json({ message: 'Creando un caso' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_casos WHERE caso_id = ?', [id]);
            res.json({ message: 'El juego ha sido eliminado' });
        });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE t_casos set ? WHERE caso_id ?', [req.body, id]);
        res.json({ message: 'El caso fue Actualizando' + req.params.id });
    }
}
exports.casosController = new CasosController();
exports.default = exports.casosController;
