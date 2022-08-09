module.exports = function (expRouter, apiCounter, counter){
    
    expRouter.get('/', apiCounter, (req, res)=>{
        res.json({"token": req.query.token, "count": counter[req.query.token]});
    });

    

    return expRouter;

}