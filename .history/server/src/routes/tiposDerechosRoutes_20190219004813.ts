import { Router } from "express";
import tiposDerechosController from '../controllers/tiposDerechosController';

class TiposDerechosRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', tiposDerechosController.list);
        this.router.get('/:id', tiposDerechosController.getOne);
    }
}
const tiposDerechosRoutes = new TiposDerechosRoutes();
export default tiposDerechosRoutes.router;