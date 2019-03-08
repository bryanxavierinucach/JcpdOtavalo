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
class MenuController {
    // Listar todos los menu
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const menu = yield database_1.default.query('SELECT * FROM t_menu');
            res.json(menu);
        });
    }
    //Listar solo un menu por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const menu = yield database_1.default.query('SELECT * FROM t_menu WHERE m_id = ? ', [id]);
            if (menu.length > 0) {
                return res.json(menu[0]);
            }
            res.status(404).json({ text: "la menu no existe" });
        });
    }
    //Crear una menu
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_menu set ?', [req.body]);
            res.json({ message: 'Creando una menu' });
        });
    }
    //Actualizar una menu por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_menu set ? WHERE m_id = ?', [req.body, id]);
            res.json({ message: 'La menu fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una menu por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_menu WHERE m_id = ?', [id]);
            res.json({ message: 'La menu ha sido eliminado' });
        });
    }
}
exports.menuController = new MenuController();
exports.default = exports.menuController;
