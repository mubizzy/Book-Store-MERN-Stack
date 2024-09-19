// export const PORT = 5555;

// export const mongoDBURL ='mongodb+srv://admin:IMjWeVz6ygPnbI1q@cluster0.tyg8fi3.mongodb.net/?retryWrites=true&w=majority'

// // Please create a free database for yourself.
// // This database will be deleted after tutorial

// // mongodb+srv://admin:IMjWeVz6ygPnbI1q@cluster0.tyg8fi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// // 'mongodb+srv://root:root@books-store-mern.c7ba8z1.mongodb.net/books-collection?retryWrites=true&w=majority';
import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.MONGODB_URI

// Please create a free database for yourself.
// This database will be deleted after tutorial