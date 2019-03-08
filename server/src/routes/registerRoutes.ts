import { Router } from "express";
const User = require('../auth/auth.controller.js');


class RegisterRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {

    this.router.post('/', User.createUser);

    }
}
const registerRoutes = new RegisterRoutes();
export default registerRoutes.router;