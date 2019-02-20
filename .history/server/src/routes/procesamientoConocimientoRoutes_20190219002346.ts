import { Router } from "express";
import procesamientoConocimientoController from '../controllers/procesamientoConocimientoController';
class ProcesamientoConocimientoRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', procesamientoConocimientoController.getAll);
        this.router.get('/:id', procesamientoConocimientoController.getOne);
    }
}
const procesamientoConocimientoRoutes = new ProcesamientoConocimientoRoutes();
export default procesamientoConocimientoRoutes.router;