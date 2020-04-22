const express = require('express')
const bodyParser= require('body-parser') 
const app = express()  

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
   console.log('listening on 3000')
  })


  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
 })
 app.post('/quotes', (req, res) => { 
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
      })
    })

  
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:<password>@cluster0-ky6dr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


