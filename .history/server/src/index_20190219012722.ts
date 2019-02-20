import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import casosRoutes from './routes/casosRoutes';
import usersRoutes from './routes/usersRoutes';
import procoRoutes from './routes/procesamientoConocimientoRoutes';
import analisisCasosRoutes from './routes/analisisCasosRoutes';
import audienciaRoutes from './routes/audienciaRoutes';
import auditoriaRoutes from './routes/auditoriaRoutes';
import avocatoriaRoutes from './routes/avocatoriaRoutes';
import cantonesRoutes from './routes/cantonesRoutes';
import audienciapruebaRoutes from './routes/audienciapruebaRoutes';
import afectadoRoutes  from './routes/afectadoRoutes';
import denunciadoRoutes from './routes/denunciadoRoutes';
import denuncianteRoutes from './routes/denuncianteRoutes';
import amanezadoVilentadoRoutes from './routes/amanezadoVilentadoRoutes';
import discapacidadRoutes from './routes/discapacidadRoutes';
import estadosRoutes from './routes/estadosRoutes';
import generoRoutes from './routes/generoRoutes';
import identidadRoutes from './routes/identidadRoutes';
import medidasEmergentesRoutes from './routes/medidasEmergentesRoutes';
import medidasProteccionArtRoutes from './routes/medidasProteccionArtRoutes';
import menuRoutes from './routes/menuRoutes';
import parroquiasRoutes from './routes/parroquiasRoutes';
import provinciasRoutes from './routes/provinciasRoutes';
import resolucionRoutes from './routes/resolucionRoutes';
import revisionAudienciaPruebaRoutes from './routes/revisionAudienciaPruebaRoutes';
import rolesRoutes from './routes/rolesRoutes';
import sectoresRoutes from './routes/sectoresRoutes';
import tipoCasosRoutes from './routes/tipoCasosRoutes';
import tipoDenunciaRoutes from './routes/tipoDenunciaRoutes';
import tipoMenuRoutes from './routes/tipoMenuRoutes';
import tipoParroquiaRoutes from './routes/tipoParroquiaRoutes';
import tipoPersonaRoutes from './routes/tipoPersonaRoutes';
import tiposDerechosRoutes from './routes/tiposDerechosRoutes';
import tiposMedidasRoutes from './routes/tiposMedidasRoutes';
import tipoDerechoAmenazasRoutes from './routes/tipoDerechoAmenazasRoutes';

class Server{

    public app: Application;
    constructor(){
       this.app= express();
       this.config();
       this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/casos', casosRoutes);
        this.app.use('/api/proco', procoRoutes);
        this.app.use('/api/anc',analisisCasosRoutes);
        this.app.use('/api/audiencias',audienciaRoutes);
        this.app.use('/api/audipruebas', audienciapruebaRoutes);
        this.app.use('/api/auditoria', auditoriaRoutes);
        this.app.use('/api/avocatoria', avocatoriaRoutes);
        this.app.use('/api/cantones', cantonesRoutes);
        this.app.use('/api/datosAfectado', afectadoRoutes );
        this.app.use('/api/datosDenunciado', denunciadoRoutes );
        this.app.use('/api/datosDenunciante', denuncianteRoutes );
        this.app.use('/api/datosAfectado', afectadoRoutes );
        this.app.use('/api/amenazadoViolentado', amanezadoVilentadoRoutes );
        this.app.use('/api/discapacidad', discapacidadRoutes );
        this.app.use('/api/estados', estadosRoutes );
        this.app.use('/api/genero', generoRoutes );
        this.app.use('/api/identidad', identidadRoutes );
        this.app.use('/api/medidasEmergentes', medidasEmergentesRoutes );
        this.app.use('/api/medidasProteccionArt', medidasProteccionArtRoutes );
        this.app.use('/api/menu', menuRoutes );
        this.app.use('/api/parroquias', parroquiasRoutes );
        this.app.use('/api/provincias', provinciasRoutes );
        this.app.use('/api/resolucion', resolucionRoutes );
        this.app.use('/api/revisionAudienciaPrueba', revisionAudienciaPruebaRoutes );
        this.app.use('/api/roles', rolesRoutes );
        this.app.use('/api/sectores', sectoresRoutes );
        this.app.use('/api/tipoCasos', tipoCasosRoutes );
        this.app.use('/api/tipoDenuncia', tipoDenunciaRoutes );
        this.app.use('/api/tipoMenu', tipoMenuRoutes );
        this.app.use('/api/tipoParroquia', tipoParroquiaRoutes );
        this.app.use('/api/tipoPersona', tipoPersonaRoutes );
        this.app.use('/api/tiposDerechos', tiposDerechosRoutes );
        this.app.use('/api/tiposMedidas', tiposMedidasRoutes );
        this.app.use('/api/tipoDerechoAmenazas', tipoDerechoAmenazasRoutes );




    }
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('El servidor en el puerto', this.app.get('port'));
            
        });
    }
}
const server =new Server();
server.start();