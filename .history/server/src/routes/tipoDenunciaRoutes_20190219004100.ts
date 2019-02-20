import { Router } from "express";
import tipoDenunciaController from '../controllers/tipoDenunciaController';

class TipoDenunciaRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoDenunciaController.list);
        this.router.get('/:id', tipoDenunciaController.getOne);
    }
}
const tipoDenunciaRoutes = new TipoDenunciaRoutes();
export default tipoDenunciaRoutes.router;