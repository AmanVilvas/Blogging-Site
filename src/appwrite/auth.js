import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"

//yeh ek general auth ka kaam hai isse kahi bhi use karo flutter, next jaha bhi auth ka work ho simple class banadi mast use karo aaraam se
export class AuthService{
    client = new Client()
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID)

        this.account = new Account(client)
    }

    async createAccount({email, password, name}){
        try{
          const userAccount =  await this.account.create(ID.unique(), email, password, name)
          if(userAccount){
            return this.login({email, password})
          }else return userAccount
        }catch(err){
            throw err
        }
    }
    async login({email, password}){
        try{
           return await this.createEmailPasswordSession( 'email', 'password')
        }catch(err){
            throw err
        }}

    async getCurrentUser(){
        try{
            return await this.account.get()
        } catch(err){
            console.log("Appwrite waalo ki galti hai meri nhi :: ", err);
            
        }
    }
        async logout(){
            try{
                await this.account.deleteSessions()
            }catch(err){
                console.log("appwrite ki galti :: err");
                
            }
        }
} 


const authService = new AuthService()

export default authService










