import { Router } from "express";
import identidadController from '../controllers/identidadController';
class IdentidadRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void {   
        this.router.get('/', identidadController.list);
        this.router.get('/:id', identidadController.getOne);
    }
}
const identidadRoutes = new IdentidadRoutes();
export default identidadRoutes.router;