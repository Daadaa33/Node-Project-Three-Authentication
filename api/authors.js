// Create endpoints for authors, make sure to use the middleware to authenticate the token

// Create endpoints for bookstores, make sure to use the middleware to authenticate the token
import express from 'express';
import prisma from './lib/index.js';
import authenticate from './middleware/authenticate.js';

const router = express.Router();

// get all author
router.get('/', authenticate, async(req, res)=> {
    try{
        const authors = await prisma.author.findMany()
        if(!authors){
            res.status(404).json({ message: "authors not found" });
        }
        res.status(200).json(authors)
    }catch(error){
        res.status(500).json({message : "authors not found"})
    }
});

// get single author
router.get('/:id', authenticate , async (req, res) => {
    try{
        const author = await prisma.author.findUnique({
            where : {
                id : Number(req.params.id)
            }
        })
        if(author){
            res.status(200).json(author)
        }else{
            res.status(404).json({message : "author not found"})
        }
    }catch(error){
        res.status(500).json({message : "faild to get single author"})
    }
})

// get bookstore 
router.get('/bookshop/:id', authenticate, async(req , res) => {
    try{
        const bookshop = await prisma.bookStore.findMany({
            where : {
                onwerId : Number(req.params.id)
            }
        })
        if(bookshop){
            res.status(200).json(bookshop)
        }else{
            res.status(404).json({message : "Bookshop not found"})
        }
    }catch(error){
        res.status(500).json({message : "faild to get bookshop on author"}) 
    }
})
// add new author
router.post('/', authenticate, async(req, res)=> {
    const { name} = req.body;
    try{
        const author = await prisma.author.create({
            data : {
                name : name
            }
        })
        if(author){
            res.status(200).json({message : "author adding successfully", data : author})
        }else{
            res.status(404).json({message :"author not working on adding" })
        }   
    }catch(error){
        res.status(500).json({message : "author not found"})
    }
});

// update author
router.put('/:id', authenticate, async(req, res) => {
    try{
        const author = await prisma.author.update({
            where :{
                id : Number(req.body.id)                
               },
               data : req.body
           })
           if(author){
               res.status(200).json(author)
           }else{
               res.status(404).json({message : "author not found"})
           }
    }catch(error){
        res.status(500).json({message : "failed to update authenticate"})
    }
})

// delete the author 
router.delete('/:id' , authenticate, async(req, res) => {
    try{
        const author = await prisma.author.delete({
            where : {
                id : Number(req.params.id)
            }
        })
        if(author){
            res.status(200).json(author)
        }else{
            res.status(404).json({message : "author not found"})
        }
    }catch(err){
        res.status(500).json({message : "failed to delete author"})
    }
})

export default router