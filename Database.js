  const mongoose = require('mongoose');
  //const URL = "mongodb+srv://(user name):<paswwd>@ mogodb atlas/";
  
  require('dotenv').config();
  const URL =process.env.MONGODB_URL ;
  
  mongoose.connect(URL, {}
  ).then(() => {
      console.log("Database connected successfully")
  }).catch((error) => {
    console.log("data base connection failed", error)
  })
  