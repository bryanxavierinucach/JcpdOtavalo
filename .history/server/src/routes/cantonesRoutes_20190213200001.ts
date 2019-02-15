import { Router } from "express";
import cantonesController from '../controllers/cantonesController';

class CantonesRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', cantonesController.list);
        this.router.get('/:id', cantonesController.getOne);
        this.router.post('/', cantonesController.create);
        this.router.put('/:id' ,cantonesController.update); 
        this.router.delete('/:id' ,cantonesController.delete);

    }
}
const cantonesRoutes = new CantonesRoutes();
export default cantonesRoutes.router;