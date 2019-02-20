import { Router } from "express";
import avocatoriaController from '../controllers/avocatoriaController';
class AvocatoriaRoutes{
    public router: Router =Router();
    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', avocatoriaController.list);
        this.router.get('/:id', avocatoriaController.getOne);
        this.router.post('/', avocatoriaController.create);
        this.router.put('/:id' ,avocatoriaController.update); 
        this.router.delete('/:id' ,avocatoriaController.delete);

    }
}
const avocatoriaRoutes = new AvocatoriaRoutes();
export default avocatoriaRoutes.router;