
import { Router } from "express";
import analisisCasosController from '../controllers/analisisCasosController';
class CasosRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', analisisCasosController.list);
        this.router.get('/:id', analisisCasosController.getOne);
        this.router.post('/', analisisCasosController.create);
        this.router.put('/:id' ,analisisCasosController.update); 
        this.router.delete('/:id' ,analisisCasosController.delete);

    }
}
const casosRoutes = new CasosRoutes();
export default casosRoutes.router;