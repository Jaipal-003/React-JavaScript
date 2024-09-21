import conf from "../conf.js";     
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject (conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            // Create the user account
            const userAccount = await this.account.create(ID.unique(), email, password, name);
                if (userAccount) {
                    return this.login({email,password});
                } else {
                    return userAccount;
                }
        } catch (error) {
            // Adding more error context if needed
            console.error("Account creation failed: ", error);
            throw error; // You can return a custom error if preferred
        }
    }

    async login({ email, password }) {
        try {
            // Initiate the login session
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            // Optional: You could log the error before throwing
            console.error("Login failed:", error);
            throw error; // Re-throw the error for higher-level handling
        }
    }
    // getCurrentUser is check user is login or not
    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            // Optional: You could log the error before throwing
            console.error("getCurrentUser:", error);
            throw error; // Re-throw the error for higher-level handling
        }
        return  null;
    } 
    async logout(){
        try {
            return await this.account.deleteSessions();
         } catch (error) {
             // Optional: You could log the error before throwing
             console.error("AppWrite serive :: logout :: error", error);
             throw error; // Re-throw the error for higher-level handling
         }
    }
    
} 

const authService = new AuthService();
export default authService;


 