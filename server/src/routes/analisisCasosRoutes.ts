
import { Router } from "express";
import analisisCasosController from '../controllers/analisisCasosController';
class AnalisisCasosRoutes{
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
const analisisCasosRoutes = new AnalisisCasosRoutes();
export default analisisCasosRoutes.router;