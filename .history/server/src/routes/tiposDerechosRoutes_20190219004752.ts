import { Router } from "express";
import tiposDerechosController from '../controllers/tiposDerechosController';

class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', tiposDerechosController.list);
        this.router.get('/:id', tiposDerechosController.getOne);
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;