import { Router } from "express";
import { userController } from '../controllers/usersController';
 
class UserRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.post('/', [
            //userValidator.validateAddUser, //function that validate request using express-validator
            //userValidator.checkValidationResult,
        ],userController.createUser); //controller function that actually perform business logic
    }
}
const indexRoutes = new UserRoutes();
export default indexRoutes.router;