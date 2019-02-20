import { Router } from "express";
import tipoCasosController from '../controllers/tipoCasosController';

class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoCasosController.list);
        this.router.get('/:id', tipoCasosController.getOne);
    
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;