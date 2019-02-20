import { discapacidadController } from './../controllers/discapacidadController';
import { Router } from "express";
class DiscapacidadRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', discapacidadController.list);
        this.router.get('/:id', discapacidadController.getOne);
    }
}
const discapacidadRoutes = new DiscapacidadRoutes();
export default discapacidadRoutes.router;