import conf from "../conf.js";
import { Client,ID,Databases,Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId }){
        try {
              return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,status,userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    async updatePost(slug,{title, content, featuredImage, status} ){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,content,featuredImage,status,
                }
            );
        } catch (error) {
            console.log ("Appwrite serive :: updatePost :: error", error);
        }
    }

    // Own Created =>> deletePost
    async deletePost (slug){
        try {
            await this.databases.deleteDocument( conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        }catch (error) {
            console.log ("Appwrite serive :: deletePost :: error", error);
            return false;
        }
    }


    async getPost (slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Appwrite serive :: deletePost :: error", error);
            return false;
        }
    } 

    async getPosts(queries = [Query.equal("status", "equal")] ){
        
    }

};


const service = new Service()
export default service