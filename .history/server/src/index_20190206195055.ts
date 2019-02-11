import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import indexRoutes from './routes/indexRoutes';
import casosRoutes from './routes/casosRoutes';
//import usersRoutes from './routes/usersRoutes';
import { userRouter } from '../../.history/server/src/routes/user.router_20190205184555';
import usersRoutes from '../../.history/server/src/routes/usersRoutes_20190201201401';

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
        this.app.use(bodyParser.json());
        this.app.use(expressValidator());
        this.app.use(cors());
        this.app.use(
            bodyParser.urlencoded({
                extended: false
            })
        )
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes():void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/users', usersRoutes);
        this.app.use('/api/casos', casosRoutes);

      
       
    }
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('El servidor en el puerto', this.app.get('port'));
            
        });
    }
}
const server =new Server();
server.start();