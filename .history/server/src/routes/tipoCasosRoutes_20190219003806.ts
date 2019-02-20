import { Router } from "express";
import tipoCasosController from '../controllers/tipoCasosController';

class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', tipoCasosController.list);
        this.router.get('/:id', tipoCasosController.getOne);
        this.router.post('/', tipoCasosController.create);
        this.router.put('/:id' ,tipoCasosController.update); 
        this.router.delete('/:id' ,tipoCasosController.delete); 
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;