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
        this.router.post('/', tipoMenuController.create);
        this.router.put('/:id' ,tipoMenuController.update); 
        this.router.delete('/:id' ,tipoMenuController.delete); 
    }
}
const tipoMenuRoutes = new TipoMenuRoutes();
export default tipoMenuRoutes.router;