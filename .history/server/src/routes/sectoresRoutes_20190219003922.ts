import { Router } from "express";
import sectoresController from '../controllers/sectoresController';

class SectoresRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', sectoresController.list);
        this.router.get('/:id', sectoresController.getOne);
        this.router.post('/', sectoresController.create);
        this.router.put('/:id' ,sectoresController.update); 
        this.router.delete('/:id' ,sectoresController.delete); 
    }
}
const sectoresRoutes = new SectoresRoutes();
export default sectoresRoutes.router;