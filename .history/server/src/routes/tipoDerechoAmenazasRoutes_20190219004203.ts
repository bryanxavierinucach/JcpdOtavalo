import { Router } from "express";
import tipoDerechoAmenazasController from '../controllers/tipoDerechoAmenazasController';

class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoDerechoAmenazasController.list);
        this.router.get('/:id', tipoDerechoAmenazasController.getOne);
       
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;