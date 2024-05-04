const mongoose = require('mongoose');
const Schema = mongoose.Schema;

   const personSchema = new mongoose.Schema({
        name:{
            type:"string",
            required:true
        },
        age:{
            type:"number",
            required:true}
   })



   const Person = mongoose.model("Person",personSchema);
   module.exports = Person