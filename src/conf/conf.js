const conf ={
    appwriteUrl: String(Process.env.REACT_APP_APPWRITE),
    appwriteProjectID: String(process.env.REACT_APP_APPWRITE_PROJECT_ID ),
    appwriteDatabaseID: String(process.env.REACT_APP_APPWRITE_DATABASE_ID ),
    appwriteCollectionID: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID ),
    appwriteBucketID: String(process.env.REACT_APP_APPWRITE_BUCKET_ID ),
}

export default conf
