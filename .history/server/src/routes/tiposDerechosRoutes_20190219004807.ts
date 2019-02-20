import { Router } from "express";
import tiposDerechosController from '../controllers/tiposDerechosController';

class tiposDerechosRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', tiposDerechosController.list);
        this.router.get('/:id', tiposDerechosController.getOne);
    }
}
const tiposDerechosRoutes = new tiposDerechosRoutes();
export default tiposDerechosRoutes.router;