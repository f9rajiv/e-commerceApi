const mongodb =require('mongodb')
const MongoClient =mongodb.MongoClient
const conxnURL ='mongodb://localhost:27017';
const dbName ='e-Commerece';

module.exports ={
    MongoClient:MongoClient,
    conxnURL:conxnURL,
    dbName:dbName,
    OID:mongodb.ObjectId
};


