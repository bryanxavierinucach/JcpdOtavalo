import { Router } from "express";
import amanezadoVilentadoController from '../controllers/amanezadoVilentadoController';
class AfectadoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', amanezadoVilentadoController.list);
        this.router.get('/:id', amanezadoVilentadoController.getOne);
    }
}
const afectadoRoutes = new AfectadoRoutes();
export default afectadoRoutes.router;