import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { AuthenticationModule } from "./authentication/authenticationModule.js";

const generator = () => {
    const router = Router();
    
    router.get('/', (req, res) => {
        res.json({
            message: `API Backend Example`,
            status: StatusCodes.OK,
        });
    });

    const authenticationModule = new AuthenticationModule();

    // Pastikan createRouter mengembalikan objek Router yang valid
    router.use('/auth', authenticationModule.controller.createRouter());

    return router;
}

export default generator;
