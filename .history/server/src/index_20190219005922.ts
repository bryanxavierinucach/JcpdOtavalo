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
import denuncianteRoutes from './routes/denuncianteRoutes'

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




    }
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('El servidor en el puerto', this.app.get('port'));
            
        });
    }
}
const server =new Server();
server.start();