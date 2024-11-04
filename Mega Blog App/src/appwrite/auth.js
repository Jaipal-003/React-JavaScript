import conf from '../conf.js'; 
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client =  new this.client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                //call another method
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    
}


const authService = new AuthService();
export default authService;