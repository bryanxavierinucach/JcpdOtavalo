import { Router } from "express";
import procoController from '../controllers/procoController';
class ProcoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void { 
        this.router.get('/:id', procoController.getOne);

        
    }
}
const procoRoutes = new ProcoRoutes();
export default procoRoutes.router;