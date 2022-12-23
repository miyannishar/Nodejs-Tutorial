module.exports= reqFilter=(req, resp, next)=>{
    // console.log('reqFilter')
    if(!req.query.age){
        resp.send("Please provide age!!")
    }
    else if(req.query.age < 18){
        resp.send("You cannot access the page")
    }
    else{
        next()
    }
}