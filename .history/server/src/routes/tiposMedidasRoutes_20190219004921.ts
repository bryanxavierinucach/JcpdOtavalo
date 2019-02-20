import { Router } from "express";
import tiposMedidasController from '../controllers/tiposMedidasController';

class TiposMedidasRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tiposMedidasController.list);
        this.router.get('/:id', tiposMedidasController.getOne);
    }
}
const tiposMedidasRoutes = new TiposMedidasRoutes();
export default tiposMedidasRoutes.router;