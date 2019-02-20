import { Router } from "express";
import amanezadoVilentadoController from '../controllers/amanezadoVilentadoController';
class AmanezadoVilentadoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', amanezadoVilentadoController.list);
        this.router.get('/:id', amanezadoVilentadoController.getOne);
    }
}
const amanezadoVilentadoRoutes = new AmanezadoVilentadoRoutes();
export default amanezadoVilentadoRoutes.router;