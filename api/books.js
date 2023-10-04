// Create endpoints for books, make sure to use the middleware to authenticate the token
import express from 'express';
import prisma from './lib/index.js';

const router = express.Router();

router.get('/',  async (req, res)=> {
    try{
        const books = await prisma.book.findMany()

        if(!books){
            res.status(404).json({message: "books not found"})
        }

        res.status(200).json(books)
    }catch(error){
        res.status(500).json({message : "invalid to get all books"})
    }
});

router.post('/', async(req, res) => {
    const body = req.body;
    try {
        // const books = await prisma.book.findUnique({ data : body})
        const book = await prisma.book.create({ data : body})

        if(!book){
            res.status(404).json({message: "books not found"})
        }
        res.status(200).json({message : "success to add new Book" ,book})
        }catch(error){
            res.status(500).json({message : "invalid to add books" ,error : error.message} )
        }
    })

// update book
router.put('/' ,async (req, res) =>{
    try{
        const books = await prisma.book.update({
            where :{
             id : Number(req.body.id)                
            },
            data : req.body
        })
        if(books){
            res.status(200).json(books)
        }else{
            res.status(404).json({message : "books not found"})
        }
    }catch(err){
        res.status(500).json({message : "invalid to update books"})
    }
})    


// Delete restaurant
router.delete('/:id',  async (req, res) => {
    try {
        const restaurant = await prisma.owner.delete({
            where: {
                id: Number(req.params.id),
            },
        });

        if(restaurant) {
            res.status(200).json({ message: 'book deleted' });
        } else {
            res.status(404).json({ message: 'book not found' });
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete book' });
    }
});
export default router