import { Router } from "express";
import afectadoController from '../controllers/afectadoController';



class AfectadoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', afectadoController.list);
        this.router.get('/:id', afectadoController.getOne);
        this.router.post('/', afectadoController.create);
        this.router.put('/:id' ,afectadoController.update); 
        this.router.delete('/:id' ,afectadoController.delete); 
    }
}
const afectadoRoutes = new AfectadoRoutes();
export default afectadoRoutes.router;