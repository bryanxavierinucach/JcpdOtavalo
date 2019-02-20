import { Router } from "express";
import revisionAudienciaPruebaController from '../controllers/revisionAudienciaPruebaController';

class RevisionAudienciaPruebaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', revisionAudienciaPruebaController.list);
        this.router.get('/:id', revisionAudienciaPruebaController.getOne);
        this.router.post('/', revisionAudienciaPruebaController.create);
        this.router.put('/:id' ,revisionAudienciaPruebaController.update); 
        this.router.delete('/:id' ,revisionAudienciaPruebaController.delete); 
    }
}
const revisionAudienciaPruebaRoutes = new RevisionAudienciaPruebaRoutes();
export default revisionAudienciaPruebaRoutes.router;