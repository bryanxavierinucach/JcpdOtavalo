import { Router } from "express";
import medidasProteccionArtController from '../controllers/medidasProteccionArtController';
class MedidasProteccionArtRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        
        this.router.get('/', medidasProteccionArtController.list);
        this.router.get('/:id', medidasProteccionArtController.getOne);
      
    }
}
const medidasProteccionArtRoutes = new MedidasProteccionArtRoutes();
export default medidasProteccionArtRoutes.router;