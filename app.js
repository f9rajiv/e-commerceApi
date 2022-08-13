const express =require('express')
const PORT=8008
const app =express()
const bodyParser= require('body-parser')
const API_Route =require('./api.routes')
require('./db_init');

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res,next)=>{
    res.send('welcome to e-commerce site')
})
app.use('/',API_Route)

app.use( (err,req,res,next)=>{
    console.log('middleware from app level',err)
    res.status(err.status || 400)
    res.json({
        text:'run error handling milddleware',
        err:err.msg || err,
    })

})

app.listen(PORT,(err,done)=>{
    if(err){
        return console.log('error in listening >>>',err)
    }
    console.log('Express server listening at port >>>' + PORT)
})

