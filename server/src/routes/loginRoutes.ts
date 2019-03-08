import { Router } from "express";
const User = require('../auth/auth.controller.js');


class LoginRoutes{
    public router: Router =Router();

    constructor(){
        this.config();
    }

    config(): void {
    this.router.post('/login', User.loginUser);

    }
}
const loginRoutes = new LoginRoutes();
export default loginRoutes.router;