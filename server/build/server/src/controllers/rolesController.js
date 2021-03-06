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
class RolesController {
    // Listar todos los roles
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield database_1.default.query('SELECT * FROM t_roles');
            res.json(roles);
        });
    }
    //Listar solo un roles por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const roles = yield database_1.default.query('SELECT * FROM t_roles WHERE r_id = ? ', [id]);
            if (roles.length > 0) {
                return res.json(roles[0]);
            }
            res.status(404).json({ text: "la roles no existe" });
        });
    }
    //Crear una roles
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_roles set ?', [req.body]);
            res.json({ message: 'Creando una roles' });
        });
    }
    //Actualizar una roles por el ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE t_roles set ? WHERE r_id = ?', [req.body, id]);
            res.json({ message: 'La roles fue Actualizando' + req.params.id });
        });
    }
    // Eliminar una roles por el ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM t_roles WHERE r_id = ?', [id]);
            res.json({ message: 'La roles ha sido eliminado' });
        });
    }
}
exports.rolesController = new RolesController();
exports.default = exports.rolesController;
