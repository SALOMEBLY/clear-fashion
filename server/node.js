const {MongoClient} = require('mongodb');
const MOGODB_URI= 'mongodb+srv://salome:Webarchitecture!@cluster0.4tvjh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const MONGODB_DB_NAME = 'clearfashion';

const client = await MongoClient.connect(MONGODB_URI, {'useNewUrlParser': true});
const db =  client.db(MONGODB_DB_NAME);
console.log("connected");


const products = [];

const collection = db.collection('products');
const result = collection.insertMany(products);

console.log(result);