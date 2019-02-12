"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const casosRoutes_1 = __importDefault(require("./routes/casosRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const procoRoutes_20190211184419_1 = __importDefault(require("../../.history/server/src/routes/procoRoutes_20190211184419"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/users', usersRoutes_1.default);
        this.app.use('/api/casos', casosRoutes_1.default);
        this.app.use('/api/proco', procoRoutes_20190211184419_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
