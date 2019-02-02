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
class UsersController {
    // Listar todos los casos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM t_usuarios');
            res.json(users);
        });
    }
    //Listar solo un afectado por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM t_usuarios WHERE usu_id = ? ', [id]);
            if (users.length > 0) {
                return res.json(users[0]);
            }
            res.status(404).json({ text: "el usuario no existe" });
            //res.json({text:'listando un caso'+ req.params.id});
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO t_usuarios set ?', [req.body]);
            res.json({ message: 'Creando un usuario' });
        });
    }
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE t_usuarios set ? WHERE usu_id ?', [req.body, id]);
        res.json({ message: 'El caso fue Actualizando' + req.params.id });
    }
}
exports.usersController = new UsersController();
exports.default = exports.usersController;
