const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('express').Router();
const {counter, hitCounter} = require('./middlewares');

const appRouter = require('./routes')(router, hitCounter, counter);


app.use(bodyParser.json());
app.use('/app', appRouter);

app.listen(3000, ()=>{
    console.log('listening @ 3000');
})

