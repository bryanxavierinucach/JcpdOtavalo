import { Router } from "express";
import generoController from '../controllers/generoController';
class GeneroRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', generoController.list);
        this.router.get('/:id', generoController.getOne);
       
    }
}
const generoRoutes = new GeneroRoutes();
export default generoRoutes.router;