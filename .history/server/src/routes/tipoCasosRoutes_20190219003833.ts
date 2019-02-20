import { Router } from "express";
import tipoCasosController from '../controllers/tipoCasosController';

class TipoCasosRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoCasosController.list);
        this.router.get('/:id', tipoCasosController.getOne);
    
    }
}
const tipoCasosRoutes = new TipoCasosRoutes();
export default tipoCasosRoutes.router;