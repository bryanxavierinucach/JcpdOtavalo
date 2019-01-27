import { Router } from "express";
import denuncianteController from '../controllers/denuncianteController';



class DenuncianteRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', denuncianteController.list);
        this.router.get('/:id', denuncianteController.getOne);
        this.router.post('/', denuncianteController.create);
        this.router.put('/:id' ,denuncianteController.update); 
        this.router.delete('/:id' ,denuncianteController.delete); 
    }
}
const denuncianteRoutes = new DenuncianteRoutes();
export default denuncianteRoutes.router;