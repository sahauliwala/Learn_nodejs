const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const databse = require('./Database');
app.use(bodyParser.json());

const Person = require('./model/person');
 require('dotenv').config();

 const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

const proutes = require('./routes/Proutes');
app.use('/person',proutes);



app.listen(3000,()=>{
     console.log("server is running on port 3000")
})