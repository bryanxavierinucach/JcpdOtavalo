import { Router } from "express";
import procesamientoConocimientoController from '../controllers/procesamientoConocimientoController';
class DenunciadoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', procesamientoConocimientoController.getAll);
        this.router.get('/:id', procesamientoConocimientoController.getOne);
        this.router.post('/', procesamientoConocimientoController.create);
        this.router.put('/:id' ,procesamientoConocimientoController.update); 
        this.router.delete('/:id' ,procesamientoConocimientoController.delete); 
    }
}
const denunciadoRoutes = new DenunciadoRoutes();
export default denunciadoRoutes.router;