import { Router } from "express";
import casosController from '../controllers/casosController';



class CasosRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', casosController.list);
        this.router.get('/:id', casosController.getOne);
        this.router.post('/', casosController.create);
        this.router.put('/:id' ,casosController.update); 
        this.router.delete('/:id' ,casosController.delete);

    }
}
const casosRoutes = new CasosRoutes();
export default casosRoutes.router;