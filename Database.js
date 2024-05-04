  const mongoose = require('mongoose');
  // const URL = "mongodb://localhost:27017/mydata";
  const URL = "mongodb+srv://pawanhp99:pawanjeet@cluster0.mc2hyiy.mongodb.net/";

  mongoose.connect(URL, {}
  ).then(() => {
      console.log("Database connected successfully")
  }).catch((error) => {
    console.log("data base connection failed", error)
  })
  