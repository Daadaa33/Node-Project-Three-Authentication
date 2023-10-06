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


server.get('/', (req, res) => {
    console.log("welcome to bookstore backend")
    res.status(200).json({message : "welcome to bookstore backend"})
})

export default server;