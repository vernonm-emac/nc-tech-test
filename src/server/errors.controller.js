exports.handleErrors = (err,req,res,next) =>{
    if(err.message){
        res.status(err.status).send({message:err.message})
    }else{
        console.log(err)
        next(err)
    }
    
}