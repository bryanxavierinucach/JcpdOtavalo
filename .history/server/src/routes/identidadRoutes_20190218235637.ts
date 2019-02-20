import { Router } from "express";
import identidadController from '../controllers/identidadController';
class CasosRoutes{
    public router: Router =Router();
    constructor(){
        this.config();
    }
    config(): void {   
        this.router.get('/', identidadController.list);
        this.router.get('/:id', identidadController.getOne);
    }
}
const casosRoutes = new CasosRoutes();
export default casosRoutes.router;