import { Router } from "express";
import tipoParroquiaController from '../controllers/tipoParroquiaController';

class TipoParroquiaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoParroquiaController.list);
        this.router.get('/:id', tipoParroquiaController.getOne);
      
    }
}
const tipoParroquiaRoutes = new TipoParroquiaRoutes();
export default tipoParroquiaRoutes.router;