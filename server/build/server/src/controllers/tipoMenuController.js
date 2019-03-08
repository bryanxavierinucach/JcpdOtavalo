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
class TipoMenuController {
    // Listar todos los tipoMenu
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoMenu = yield database_1.default.query('SELECT * FROM t_tipo_menu');
            res.json(tipoMenu);
        });
    }
    //Listar solo un tipoMenu por el ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tipoMenu = yield database_1.default.query('SELECT * FROM t_tipo_menu WHERE tm_id = ? ', [id]);
            if (tipoMenu.length > 0) {
                return res.json(tipoMenu[0]);
            }
            res.status(404).json({ text: "la tipoMenu no existe" });
        });
    }
}
exports.tipoMenuController = new TipoMenuController();
exports.default = exports.tipoMenuController;
