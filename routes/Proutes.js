const express = require('express');
const router = express();
const Person = require('../model/person');

router.post('/',async(req,res)=>{

    try{
    const  data = req.body;
    const person = new Person(data);
    const result =  await person.save();
    console.log("data saved successfully")
    res.status(201).json(result); }
    catch(error){
        console.log("error",error)
        res.status(500).json(error);
    }

})

router.get('/',async(req,res)=>{
    try{  
        const data = await Person.find();
        console.log("data fetched successfully")
        res.status(200).json(data);

    }
    catch(error){
        console.log("error",error)
        res.status(500).json(error);
    }

});
    router.put("/:id", async (req, res) => {
        try {
            const personId = req.params.id;
            const data = req.body;
            const result = await Person.findByIdAndUpdate(personId,data,{
                new:true,  
            runValidators:true});
             res.status(200).json(result);
            console.log("data updated successfully")
            if (!result) {
                res.status(404).json({ message: "data not found" });

        }
        } catch (error) {
            console.log("internal server error", error)
            res.status(500).json(error);
        }
    })

    router.delete("/:id", async (req, res) => {
        try {
            const personId = req.params.id;
            const result = await Person.findByIdAndDelete(personId);
            res.status(200).json(result);
            console.log("data deleted successfully")
            if (!result) {
                res.status(404).json({ message: "data not found" });
            }
        } catch (error) {   
            console.log(error)
            res.status(500).json(error);
        }
    
})















  module.exports = router