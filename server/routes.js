import express from "express"
import mongoose from 'mongoose';
import Weight from './models/measurements.js'

var router = express.Router()

router.get("/weight", (req, res) => {
    Weight.find({},(err, data) => {
        if(err){
            res.status(500).json(err)
        } else {
            res.json(data)
        }
    })
})

router.post("/weight", (req, res) => {
    const newweight = new Weight ({
        id: between(0,100),
        bodyweight : req.body.bodyweight,
        height: req.body.height,
        hipwidth: req.body.hipwidth,
        date: req.body.date
        
    })
    newweight.save().then((newweight) => {res.json(newweight)})
    .catch((err) => {res.status(500).send(err.message)})
})

router.post("/edit/:id", (req, res) => {
    Weight.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) => {
        if(err){
            res.status(500).json(err)
        } else {
            res.send(data)
        
        }
    })
})

router.delete("/weight/:id", (req, res) => {
    Weight.findByIdAndDelete(req.params.id, (err, data) => {
        if(err){
            res.status(500).json(err)
        } else {
            res.json(data)
        }
    })
})

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

export default router;