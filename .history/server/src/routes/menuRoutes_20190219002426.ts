import { Router } from "express";
import menuController from '../controllers/menuController';
class DenunciadoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', menuController.list);
        this.router.get('/:id', menuController.getOne);
        this.router.post('/', menuController.create);
        this.router.put('/:id' ,menuController.update); 
        this.router.delete('/:id' ,menuController.delete); 
    }
}
const denunciadoRoutes = new DenunciadoRoutes();
export default denunciadoRoutes.router;