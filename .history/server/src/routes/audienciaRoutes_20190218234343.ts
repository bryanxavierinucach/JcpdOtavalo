import { Router } from "express";
import audienciaController from '../controllers/audienciaController';
class AudienciaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', audienciaController.list);
        this.router.get('/:id', audienciaController.getOne);
        this.router.post('/', audienciaController.create);
        this.router.put('/:id' ,audienciaController.update); 
        this.router.delete('/:id' ,audienciaController.delete);
    }
}
const audienciaRoutes = new AudienciaRoutes();
export default audienciaRoutes.router;