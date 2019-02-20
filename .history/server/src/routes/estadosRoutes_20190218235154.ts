import { Router } from "express";
import estadosController from '../controllers/estadosController';
class EstadosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', estadosController.list);
        this.router.get('/:id', estadosController.getOne);
    }
}
const estadosRoutes = new EstadosRoutes();
export default estadosRoutes.router;