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
    }
}
const denunciadoRoutes = new DenunciadoRoutes();
export default denunciadoRoutes.router;