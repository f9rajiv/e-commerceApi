const dbConfig =require('./configs/db.configs')

const mongoose =require('mongoose')

//connection url must be with selected db for mongoose
const conxnURL = dbConfig.conxnURL + '/' + dbConfig.dbName;
//eg mongodb://localhost:271017/db_name

//TODO  handle connection result with promise

mongoose.connect(conxnURL,function(err,done){
    if (err) {
        console.log('error in db connection >>>',err)
    
    }
    else{
        console.log('db connection successful')
        console.log('press ctrl + c to break ')
    }
})