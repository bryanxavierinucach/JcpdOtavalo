import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import casosRoutes from './routes/casosRoutes';
import usersRoutes from './routes/usersRoutes';
import procoRoutes from './routes/procoRoutes';
import analisisCasosRoutes from './routes/analisisCasosRoutes';
import audienciaRoutes from './routes/audienciaRoutes';
import auditoriaRoutes from '../../.history/server/src/routes/auditoriaRoutes_20190213195650';
import avocatoriaRoutes from '../../.history/server/src/routes/avocatoriaRoutes_20190213195807';
import cantonesRoutes from '../../.history/server/src/routes/cantonesRoutes_20190213200001';

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
        this.app.use('/api/audipru', audienciaRoutes);
        this.app.use('/api/auditoria', auditoriaRoutes);
        this.app.use('/api/avocatoria', avocatoriaRoutes);
        this.app.use('/api/cantones', cantonesRoutes);




    }
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('El servidor en el puerto', this.app.get('port'));
            
        });
    }
}
const server =new Server();
server.start();