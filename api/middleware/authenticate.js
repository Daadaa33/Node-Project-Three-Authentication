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
                    res.status(401).json({message : "fadlan geli token si aan kuugu fasaxno inaad isticmaasho"})
                }else{
                    req.decode = decode
                    next()
                }
                
            })
    }else {
        res.status(401).json({message : "token ma ahan mid jiro waa inaad token saxan gelisaa"})
    }
}



export default authenticate