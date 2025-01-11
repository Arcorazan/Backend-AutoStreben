import { StatusCodes } from "http-status-codes";
import { AuthenticationService } from "./authenticationService.js";
import { Router } from "express";

export class AuthenticationController {
    constructor(){
        // import service
        this.service = new AuthenticationService();
        this.login = this.login.bind(this)
    }


    // membuat router
    createRouter() {
        const router = Router();
        
        router.post('/login', (req, res) => this.login(req, res));
        router.post('/forgetpassword', (req, res) => this.forgetpassword(req, res));
        router.get('/list-user', (req,res) => this.getAll(req,res));

        return router;
    }

    // membuat function login seperti pada app.js
    login(req, res){
        console.log(req.body, 'what');
        
        const result = this.service.login(req.body);
        return res.status(StatusCodes.OK).json(result)
    }

    forgetpassword(x,y){
        const result = this.service.forgetpassword(x.body);
        return y.status(StatusCodes.CREATED).json({
            data: result,
            message: 'forgot password?'
        })
    }

    getAll(req, res){
        //ambil search dari request query user
        //contoh google.com?search=sajdisjffai
        const search = req.query.search
        const getData = this.service.getAll(search);
        return res.status(StatusCodes.OK).json(getData)
    }
}