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
const procesamientoConocimientoRoutes_1 = __importDefault(require("./routes/procesamientoConocimientoRoutes"));
const analisisCasosRoutes_1 = __importDefault(require("./routes/analisisCasosRoutes"));
const audienciaRoutes_1 = __importDefault(require("./routes/audienciaRoutes"));
const auditoriaRoutes_1 = __importDefault(require("./routes/auditoriaRoutes"));
const avocatoriaRoutes_1 = __importDefault(require("./routes/avocatoriaRoutes"));
const cantonesRoutes_1 = __importDefault(require("./routes/cantonesRoutes"));
const audienciapruebaRoutes_1 = __importDefault(require("./routes/audienciapruebaRoutes"));
const afectadoRoutes_1 = __importDefault(require("./routes/afectadoRoutes"));
const denunciadoRoutes_1 = __importDefault(require("./routes/denunciadoRoutes"));
const denuncianteRoutes_1 = __importDefault(require("./routes/denuncianteRoutes"));
const amanezadoVilentadoRoutes_1 = __importDefault(require("./routes/amanezadoVilentadoRoutes"));
const discapacidadRoutes_1 = __importDefault(require("./routes/discapacidadRoutes"));
const estadosRoutes_1 = __importDefault(require("./routes/estadosRoutes"));
const generoRoutes_1 = __importDefault(require("./routes/generoRoutes"));
const identidadRoutes_1 = __importDefault(require("./routes/identidadRoutes"));
const medidasEmergentesRoutes_1 = __importDefault(require("./routes/medidasEmergentesRoutes"));
const medidasProteccionArtRoutes_1 = __importDefault(require("./routes/medidasProteccionArtRoutes"));
const menuRoutes_1 = __importDefault(require("./routes/menuRoutes"));
const parroquiasRoutes_1 = __importDefault(require("./routes/parroquiasRoutes"));
const provinciasRoutes_1 = __importDefault(require("./routes/provinciasRoutes"));
const resolucionRoutes_1 = __importDefault(require("./routes/resolucionRoutes"));
const revisionAudienciaPruebaRoutes_1 = __importDefault(require("./routes/revisionAudienciaPruebaRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const sectoresRoutes_1 = __importDefault(require("./routes/sectoresRoutes"));
const tipoCasosRoutes_1 = __importDefault(require("./routes/tipoCasosRoutes"));
const tipoDenunciaRoutes_1 = __importDefault(require("./routes/tipoDenunciaRoutes"));
const tipoMenuRoutes_1 = __importDefault(require("./routes/tipoMenuRoutes"));
const tipoParroquiaRoutes_1 = __importDefault(require("./routes/tipoParroquiaRoutes"));
const tipoPersonaRoutes_1 = __importDefault(require("./routes/tipoPersonaRoutes"));
const tiposDerechosRoutes_1 = __importDefault(require("./routes/tiposDerechosRoutes"));
const tiposMedidasRoutes_1 = __importDefault(require("./routes/tiposMedidasRoutes"));
const tipoDerechoAmenazasRoutes_1 = __importDefault(require("./routes/tipoDerechoAmenazasRoutes"));
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
        this.app.use('/api/proco', procesamientoConocimientoRoutes_1.default);
        this.app.use('/api/anc', analisisCasosRoutes_1.default);
        this.app.use('/api/audiencias', audienciaRoutes_1.default);
        this.app.use('/api/audipruebas', audienciapruebaRoutes_1.default);
        this.app.use('/api/auditoria', auditoriaRoutes_1.default);
        this.app.use('/api/avocatoria', avocatoriaRoutes_1.default);
        this.app.use('/api/cantones', cantonesRoutes_1.default);
        this.app.use('/api/datosAfectado', afectadoRoutes_1.default);
        this.app.use('/api/datosDenunciado', denunciadoRoutes_1.default);
        this.app.use('/api/datosDenunciante', denuncianteRoutes_1.default);
        this.app.use('/api/datosAfectado', afectadoRoutes_1.default);
        this.app.use('/api/amenazadoViolentado', amanezadoVilentadoRoutes_1.default);
        this.app.use('/api/discapacidad', discapacidadRoutes_1.default);
        this.app.use('/api/estados', estadosRoutes_1.default);
        this.app.use('/api/genero', generoRoutes_1.default);
        this.app.use('/api/identidad', identidadRoutes_1.default);
        this.app.use('/api/medidasEmergentes', medidasEmergentesRoutes_1.default);
        this.app.use('/api/medidasProteccionArt', medidasProteccionArtRoutes_1.default);
        this.app.use('/api/menu', menuRoutes_1.default);
        this.app.use('/api/parroquias', parroquiasRoutes_1.default);
        this.app.use('/api/provincias', provinciasRoutes_1.default);
        this.app.use('/api/resolucion', resolucionRoutes_1.default);
        this.app.use('/api/revisionAudienciaPrueba', revisionAudienciaPruebaRoutes_1.default);
        this.app.use('/api/roles', rolesRoutes_1.default);
        this.app.use('/api/sectores', sectoresRoutes_1.default);
        this.app.use('/api/tipoCasos', tipoCasosRoutes_1.default);
        this.app.use('/api/tipoDenuncia', tipoDenunciaRoutes_1.default);
        this.app.use('/api/tipoMenu', tipoMenuRoutes_1.default);
        this.app.use('/api/tipoParroquia', tipoParroquiaRoutes_1.default);
        this.app.use('/api/tipoPersona', tipoPersonaRoutes_1.default);
        this.app.use('/api/tiposDerechos', tiposDerechosRoutes_1.default);
        this.app.use('/api/tiposMedidas', tiposMedidasRoutes_1.default);
        this.app.use('/api/tipoDerechoAmenazas', tipoDerechoAmenazasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
