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
class CantonesController {
    // Listar todos los cantones
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cantones = yield database_1.default.query('SELECT * FROM t_cantones');
            res.json(cantones);
        });
    }
    //Listar solo un afectado por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cantones = yield database_1.default.query('SELECT * FROM t_cantones WHERE can_id = ? ', [id]);
            if (cantones.length > 0) {
                return res.json(cantones[0]);
            }
            res.status(404).json({ text: "el juego no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_cantones set ?', [req.body]);
            res.json({ message: 'Creando una cantones' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_cantones set ? WHERE can_id = ?', [req.body, id]);
            res.json({ message: 'La cantones fue Actualizando' + req.params.id });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_cantones WHERE can_id = ?', [id]);
            res.json({ message: 'La cantones ha sido eliminado' });
        });
    }
}
exports.cantonesController = new CantonesController();
exports.default = exports.cantonesController;
