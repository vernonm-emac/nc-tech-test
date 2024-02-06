exports.handleErrors = (err,req,res,next) =>{
    console.log(err)
    next(err)
}