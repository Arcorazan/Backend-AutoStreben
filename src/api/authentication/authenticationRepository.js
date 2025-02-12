import { readFileSync, writeFileSync } from "fs";
import { User } from "../../entities/UserEntity.js";

export class AuthenticationRepository {
    constructor(em){
        this.em = em
    }

    login(userBody){

    }

    forgetpassword(data){

    }

    //async await nunggu sampe proses di database selesai
    async getAll(search){
        //findAll adalah fungsi bawaan dari mikrorm
        const dataAllUser = await this.em.findAll(User)
        console.log (dataAllUser)
        return dataAllUser
    }
}