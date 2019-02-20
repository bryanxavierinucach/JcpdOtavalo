import { Router } from "express";
import auditoriaController from '../controllers/auditoriaController';
class AuditoriaRoutes{
    public router: Router =Router();
    constructor(){
        this.config();
    }
    config(): void {
        
        this.router.get('/', auditoriaController.list);
        this.router.get('/:id', auditoriaController.getOne);
        this.router.post('/', auditoriaController.create);
        this.router.put('/:id' ,auditoriaController.update); 
        this.router.delete('/:id' ,auditoriaController.delete);
    }
}
const auditoriaRoutes = new AuditoriaRoutes();
export default auditoriaRoutes.router;