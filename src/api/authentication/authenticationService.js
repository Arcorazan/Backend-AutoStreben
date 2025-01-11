import { AuthenticationRepository } from "./authenticationRepository.js";

export class AuthenticationService {
    constructor(){
        this.repository = new AuthenticationRepository();
    }

    login(userBody){
        return this.repository.login(userBody);
    }

    //task
    forgetpassword(data){
        return this.repository.forgetpassword(data);
    }

    getAll(search){
        // kasih validasi kalo search nya itu ga ada character selain alphabet
        if(!/^[A-Za-z]+$/.test(search)){
            throw new Error("search invalid");
        }
        return this.repository.getAll(search);
    }
}
