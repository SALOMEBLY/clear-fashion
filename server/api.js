const cors = require('cors');
const { response } = require('express');
const express = require('express');
const helmet = require('helmet');
const db = require('./db/index');

const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});

app.get('/products/search', async (req, res) => {
  let limit = 12
  if(req.query.limit){
    limit = req.query.price;
  }
  let prod = []
  const result = await db.find({'brand':req.query.brand,'price':{"$lte": parseFloat(req.query.price)}})
  for(i=0;i<limit;i++){
    prod.push(result[i])
  }
prod.sort(function(a,b){
  {return a.price - b.price}
});
res.send(prod);
});

app.get('/products/:id', async (request,response) => {
  const id=(request.params.id)
  const product= await db.find({"_id":id})
  response.send(product); 
})



app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
