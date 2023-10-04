import express,{json} from "express";
import booksRouter from "./books.js"
import bookStoreRouter from "./bookstores.js"
import authorRouter from "./authors.js"
import ownerRouter from "./owner.js"
const server = express();
server.use(json());


server.use('/api/books', booksRouter)
server.use('/api/bookstore', bookStoreRouter)
server.use('/api/author', authorRouter)
server.use('/api/owner', ownerRouter)


server.get('/', (res, req) => {
    console.log("welcome to bookstore backend")
})

export default server;