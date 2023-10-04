import  Jwt  from "jsonwebtoken"

const SECRET_KEY = process.env.SECRET_KEY

const authenticate = (req, res, next) => {
    const token = req.headers.authorization

    if(token){
        const tokenWithBearer = token.split(" ")[1]
        Jwt.verify(
            tokenWithBearer,
            SECRET_KEY,
            (err, decode) => {
                if(err){
                    res.status(401).json({message : "invalid token middleware"})
                }else{
                    req.decode = decode
                    next()
                }
                
            })
    }else {
        res.status(401).json({message : "invalid credentials with middleware"})
    }
}



export default authenticate