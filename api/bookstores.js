// Create endpoints for bookstores, make sure to use the middleware to authenticate the token
import express from 'express';
import prisma from './lib/index.js';
import authenticate from './middleware/authenticate.js';


const router = express.Router();

// get all bookstore
router.get('/',  async(req, res)=> {
    try{
        const bookStore = await prisma.bookStore.findMany()
        if(!bookStore){
            res.status(404).json({message: "Book not found"});
        }
        res.status(200).json(bookStore)
    }catch(error){
        res.status(500).json({message : "bookStore not found"})
    }
});

// get single bookstore by id 
router.get('/:id', async(req, res) => {
    try{
        const bookstore = await prisma.bookStore.findUnique({
            where : {
                id : Number(req.params.id)
            }
        })
        if(bookstore){
            res.status(200).json(bookstore)
        }else{
            res.status(404).json({message : "bookstore not found"})
        }
    }catch(err){
        res.status(500).json({message: `faild to get bookstore`})
    }
})
// get ownerId by id
router.get("/owner/:id" , async (req, res) => {
    try{
        const bookStore = await prisma.bookStore.findMany({
          where: {
            id: Number(req.params.id),
          },
        });
        if(bookStore){
            res.status(200).json(bookStore)
        }else{
            res.status(404).json({message : "ownerId not found"})
        }
    }catch(error){
        res.status(500).json({message : "faild to get owner"})
    }
})

// add new BookStore
router.post('/', authenticate ,async(req, res)=> {
    try{
        const bookStore = await prisma.bookStore.create({
            data : req.body
        })
        if(bookStore){
            res.status(200).json({message : "bookStore adding successfully", data : bookStore})
        }else{
            res.status(404).json({message :"bookstore not working on adding" })
        }   
    }catch(error){
        res.status(500).json({message : "faild to add bookstore"})
    }
});


// update bookstore

router.put("/", authenticate , async (req, res) =>{
    try{
        const bookstore = await prisma.bookStore.update({
            where : {
                id :Number(req.body.id)
            },
            data: req.body
        })
        if(bookstore){
            res.status(200).json(bookstore)
        }else{
            res.status(404).json({message : "bookstore not found"})
        }
    }catch(error){
        res.status(500).json({message : "faild to update bookstore"})
    }
})


// Delete bookstore
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const bookstore = await prisma.bookStore.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        if(bookstore) {
            res.status(200).json({ message: 'bookStore deleted' });
        } else {
            res.status(404).json({ message: 'bookStore not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete bookStore' });
    }
});
export default router