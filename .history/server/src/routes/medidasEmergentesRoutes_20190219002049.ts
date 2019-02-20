import { Router } from "express";
import medidasEmergentesController from '../controllers/medidasEmergentesController';
class MedidasEmergenciaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', medidasEmergentesController.list);
        this.router.get('/:id', medidasEmergentesController.getOne);
        this.router.post('/', medidasEmergentesController.create);
        this.router.put('/:id' ,medidasEmergentesController.update); 
        this.router.delete('/:id' ,medidasEmergentesController.delete); 
    }
}
const medidasEmergenciaRoutes = new MedidasEmergenciaRoutes();
export default medidasEmergenciaRoutes.router;