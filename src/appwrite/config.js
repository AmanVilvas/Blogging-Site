import conf from "../conf/conf"
import { Databases,Client, Account, Query, Storage, ID} from "appwrite"



export class Service{
    client = new Client()
    databases
    bucket

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try{
        return await this.databases.getDocumemts(conf.appwriteCollectionID, conf.appwriteDatabaseID, slug)
        }catch(err){
            console.log(err);
            
        }
    }
    async getPosts( queries = [Query.equal("status", "active")] ){
        try{
        return await this.databases.listDocuments(conf.appwriteDatabaseID, conf.appwriteCollectionID, queries)
        }catch(err){
            console.log("get Posts::"+ err);    
        }
    }
    async createPost(title, slug, content, featuredImage, userId ){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,conf.appwriteCollectionID, slug, {title, content, featuredImage, userId, slug}
            )
        }catch(err){
            console.log("createPost ::"+err);
            
        }
    }
    async updatePost(slug, { content,featuredImage, status }){
        try{
        return await this.databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, { content,featuredImage, status}
         )
        }catch(err){
            console.log("updatePost :: "+ err );
            
        }
    }
    async deletePost(slug){
        try{
        await this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug
        )
        return true;
        }catch(err){
            console.log("deletePost :: "+ err );
            
        }
    }


    //storage service

    async uploadFile(file){
        try{    
            return await this.bucket.createFile(conf.appwriteBucketID,
                ID.unique(),
                file
             )

        }catch(err){
            console.log("uploadFIle ::" + err);
            
        }
    }
    async deleteFile(fileId){
        try{    
            return await this.bucket.deleteFile(conf.appwriteBucketID,
                fileId
            )

        }catch(err){
            console.log("deleteFIle ::" + err);
            
        }
    }
    async previewFile(fileId){
        try{
            return await this.bucket.getFilePreview(
                conf.appwriteBucketID,
                fileId
            ).href

        }catch(err){
            console.log("preview file :: " + err);
            
        }
    }

}

const service = new Service()
export default service















