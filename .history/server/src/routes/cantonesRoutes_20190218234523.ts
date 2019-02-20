import { Router } from "express";
import cantonesController from '../controllers/cantonesController';

class CantonesRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', cantonesController.list);
        this.router.get('/:id', cantonesController.getOne);
    }
}
const cantonesRoutes = new CantonesRoutes();
export default cantonesRoutes.router;