import { Router } from "express";
import denunciadoController from '../controllers/denunciadoController';
class DenunciadoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', denunciadoController.list);
        this.router.get('/:id', denunciadoController.getOne);
        this.router.post('/', denunciadoController.create);
        this.router.put('/:id' ,denunciadoController.update); 
        this.router.delete('/:id' ,denunciadoController.delete); 
    }
}
const denunciadoRoutes = new DenunciadoRoutes();
export default denunciadoRoutes.router;