// Create endpoints for authors, make sure to use the middleware to authenticate the token

// Create endpoints for bookstores, make sure to use the middleware to authenticate the token
import express from 'express';
import prisma from './lib/index.js';

const router = express.Router();

router.get('/',  async(req, res)=> {
    try{
        const authors = await prisma.author.findMany()
        if(!authors){
            res.status(404).json({message: "authors not found"});
        }
        res.status(200).json(authors)
    }catch(error){
        res.status(500).json({message : "authors not found"})
    }
});


// add new author
router.post('/',  async(req, res)=> {
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



export default router