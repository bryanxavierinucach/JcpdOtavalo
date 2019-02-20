import { Router } from "express";
import parroquiasController from '../controllers/parroquiasController';
class ParroquiasRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', parroquiasController.list);
        this.router.get('/:id', parroquiasController.getOne);
        this.router.post('/', parroquiasController.create);
        this.router.put('/:id' ,parroquiasController.update); 
        this.router.delete('/:id' ,parroquiasController.delete); 
    }
}
const parroquiasRoutes = new ParroquiasRoutes();
export default parroquiasRoutes.router;