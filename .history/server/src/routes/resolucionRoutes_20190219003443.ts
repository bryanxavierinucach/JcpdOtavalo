import { Router } from "express";
import resolucionController from '../controllers/resolucionController';

class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', resolucionController.list);
        this.router.get('/:id', resolucionController.getOne);
        this.router.post('/', resolucionController.create);
        this.router.put('/:id' ,resolucionController.update); 
        this.router.delete('/:id' ,resolucionController.delete); 
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;