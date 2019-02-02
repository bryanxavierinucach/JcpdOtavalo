import { Router } from "express";
import usersController from '../controllers/usersController';



class AfectadoRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', usersController.list);
        this.router.get('/:id', usersController.getOne);
        this.router.post('/', usersController.create);
        this.router.put('/:id' ,usersController.update); 
        this.router.delete('/:id' ,usersController.delete); 
    }
}
const afectadoRoutes = new AfectadoRoutes();
export default afectadoRoutes.router;