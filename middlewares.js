let counter = {};

const hitCounter = (req, res, next) =>{
    if(req.query && req.query.token){
        let token = req.query.token;
        if(token in counter) counter[token] +=1;
        else counter[token] = 1;
    }
    next();
}


module.exports = {counter, hitCounter}