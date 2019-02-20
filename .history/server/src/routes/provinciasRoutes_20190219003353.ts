import { Router } from "express";
import provinciasController from '../controllers/provinciasController';

class ProvinciasRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', provinciasController.list);
        this.router.get('/:id', provinciasController.getOne);
    }
}
const provinciasRoutes = new ProvinciasRoutes();
export default provinciasRoutes.router;