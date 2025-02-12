// Menggunakan PascalCase untuk nama class yang diimpor
import { AuthenticationController } from "./authenticationController.js";
import { AuthenticationRepository } from "./authenticationRepository.js";
import { AuthenticationService } from "./authenticationService.js";

export class AuthenticationModule {
    constructor(database) {
        const repository = new AuthenticationRepository(database.em.fork())
        const service = new AuthenticationService(repository);

        //controller butuh service, dan service butuh repository, maka ditulis sebagai variable
        this.controller = new AuthenticationController(service);
    }
}
