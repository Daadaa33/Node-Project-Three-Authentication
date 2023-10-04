// Setup Sign up and Login API for Owner
import 'dotenv/config'
import express from 'express';
import prisma from './lib/index.js';
import bcrypt from "bcrypt"
import Jwt  from 'jsonwebtoken';


const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY

// read all owners 
router.get('/', async (req, res) => {
    const owners = await prisma.owner.findMany()
    res.status(200).json(owners)
})
// singup owner and password can be change in to hash password
router.post('/singup', async (req, res)=> {

    const {name , email, password } = req.body
    // create the hash password
    const hashPassword = await bcrypt.hash(password, 10) 

    try{
        const existingOwner = await prisma.owner.findUnique({
            where : {
                email : email
            }
        })
        if(existingOwner){
            res.status(404).json({message: "owner already exists"})
        }

        const newUser = await prisma.owner.create({
            data : {
                name : name,
                email : email,
                password : hashPassword
            }
        })
        if(newUser){
            res.status(201).json({message : "success to create new owner" , data : newUser})
        }else {
            res.status(404).json({message : "failed to create new owner"})
        }
    }catch(error){
        res.status(500).json({message : "invalid to setup singup", error : error.message})
    }
});


//  Login the owner with jwt
router.post('/login', async (req, res) => {
    const {email , password} = req.body;
    try {
        const existingOwner = await prisma.owner.findUnique({
            where: {
                email : email
            }
        })

        if(existingOwner){
            const ispasswordCorrect = await bcrypt.compare(password ,existingOwner.password)
            if(!ispasswordCorrect){
                res.status(401).json({message: "Invalid password"})
            }

            // create token 
            const token =  Jwt.sign(
                {id :existingOwner.id, name : existingOwner.name, email : existingOwner.email},
                SECRET_KEY,
                {expiresIn : "1h"}
            )
            res.status(200).json({message: "Success to login" , token : token})
        }else{
            res.status(404).json({message: "email already exists"})
        }    
    }catch(error){
        res.status(500).json({message : "invalid login", error : error.message})
    }
})

export default router