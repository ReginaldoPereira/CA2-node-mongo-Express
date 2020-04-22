const express = require('express')
const bodyParser= require('body-parser') 
const app = express()  
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, function() {
    console.log('port 3000')

})

mongoose.connect("mongodb+srv://test:ccttestuser@cluster0-ky6dr.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});


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
  




