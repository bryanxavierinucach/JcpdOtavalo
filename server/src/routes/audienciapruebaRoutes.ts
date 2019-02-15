import { Router } from "express";
import audienciaPuebaController from '../controllers/audienciapruebaController';

class AudienciapruebaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', audienciaPuebaController.list);
        this.router.get('/:id', audienciaPuebaController.getOne);
        this.router.post('/', audienciaPuebaController.create);
        this.router.put('/:id' ,audienciaPuebaController.update); 
        this.router.delete('/:id' ,audienciaPuebaController.delete);

    }
}
const audienciapruebaRoutes = new AudienciapruebaRoutes();
export default audienciapruebaRoutes.router;