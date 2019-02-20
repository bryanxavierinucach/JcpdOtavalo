import { discapacidadController } from './../controllers/discapacidadController';
import { Router } from "express";
class AudienciaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', discapacidadController.list);
        this.router.get('/:id', discapacidadController.getOne);
    }
}
const audienciaRoutes = new AudienciaRoutes();
export default audienciaRoutes.router;