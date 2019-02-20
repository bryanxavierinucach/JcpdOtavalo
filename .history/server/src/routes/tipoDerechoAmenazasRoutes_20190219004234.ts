import { Router } from "express";
import tipoDerechoAmenazasController from '../controllers/tipoDerechoAmenazasController';

class TipoDerechoAmenazasRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoDerechoAmenazasController.list);
        this.router.get('/:id', tipoDerechoAmenazasController.getOne);
       
    }
}
const tipoDerechoAmenazasRoutes = new TipoDerechoAmenazasRoutes();
export default tipoDerechoAmenazasRoutes.router;