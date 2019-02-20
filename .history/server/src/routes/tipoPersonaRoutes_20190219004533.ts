import { Router } from "express";
import tipoPersonaController from '../controllers/tipoPersonaController';

class TipoPersonaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoPersonaController.list);
        this.router.get('/:id', tipoPersonaController.getOne);
     
    }
}
const tipoPersonaRoutes = new TipoPersonaRoutes();
export default tipoPersonaRoutes.router;