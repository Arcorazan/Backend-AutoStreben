import { readFileSync, writeFileSync } from "fs";

export class AuthenticationRepository {
    constructor(){
        this.data = JSON.parse(readFileSync('./src/api/data.json', 'utf-8'));
    }

    login(userBody){
        console.log(this.data, userBody);
        
        const dataUser = this.data.data.find((val) => val.username === userBody.username);

        if (!dataUser) { 
            return "gada boy datanya"
        }

        if (userBody.password === dataUser.password){
            return 'login success';
        } else {
            return 'wrong password';
        }
    }

    forgetpassword(data){
        writeFileSync('./src/api/data.json', Buffer.from(JSON.stringify(data)));
        console.log(data);
    
        return this.data
    }

    getAll(search){
        //terapin filter buat search yg mengandung kata tersebut
        console.log(search, 'apa');

        //validasi bahwa search beneran ada & panjang lebih dari 0
        if(search && search.length > 0){
            return this.data.data.filter((val) => val.username.includes(search))
        }

        //kalo gaada langsung return semua datanya
        return this.data.data;
    }
}