// Menggunakan PascalCase untuk nama class yang diimpor
import { AuthenticationController } from "./authenticationController.js";
import { AuthenticationService } from "./authenticationService.js";

export class AuthenticationModule {
    constructor() {
        const service = new AuthenticationService();
        this.controller = new AuthenticationController(service);
    }
}
