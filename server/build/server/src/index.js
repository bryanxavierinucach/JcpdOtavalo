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
const procoRoutes_1 = __importDefault(require("./routes/procoRoutes"));
const analisisCasosRoutes_1 = __importDefault(require("./routes/analisisCasosRoutes"));
const audienciaRoutes_1 = __importDefault(require("./routes/audienciaRoutes"));
const auditoriaRoutes_20190213195650_1 = __importDefault(require("../../.history/server/src/routes/auditoriaRoutes_20190213195650"));
const avocatoriaRoutes_20190213195807_1 = __importDefault(require("../../.history/server/src/routes/avocatoriaRoutes_20190213195807"));
const cantonesRoutes_20190213200001_1 = __importDefault(require("../../.history/server/src/routes/cantonesRoutes_20190213200001"));
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
        this.app.use('/api/proco', procoRoutes_1.default);
        this.app.use('/api/anc', analisisCasosRoutes_1.default);
        this.app.use('/api/audiencias', audienciaRoutes_1.default);
        this.app.use('/api/audipru', audienciaRoutes_1.default);
        this.app.use('/api/auditoria', auditoriaRoutes_20190213195650_1.default);
        this.app.use('/api/avocatoria', avocatoriaRoutes_20190213195807_1.default);
        this.app.use('/api/cantones', cantonesRoutes_20190213200001_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
