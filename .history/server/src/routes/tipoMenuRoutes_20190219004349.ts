import { Router } from "express";
import tipoMenuController from '../controllers/tipoMenuController';

class TipoMenuRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoMenuController.list);
        this.router.get('/:id', tipoMenuController.getOne);
    }
}
const tipoMenuRoutes = new TipoMenuRoutes();
export default tipoMenuRoutes.router;