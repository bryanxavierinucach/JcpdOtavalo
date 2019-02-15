import { Router } from "express";
import casosController from '../controllers/procoController';
class ProcoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void { 
        this.router.get('/:id', casosController.getOne);
        this.router.get('/', casosController.getAll);

        
    }
}
const procoRoutes = new ProcoRoutes();
export default procoRoutes.router;