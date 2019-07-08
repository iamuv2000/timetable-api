const express = require('express')
const Timetable = require('../models/timetable')
const router = new express.Router()

router.post('/timetable',async(req,res)=>{
    const timetable = new Timetable(req.body)
    try{
        await timetable.save()
        res.status(201).send({timetable})
        
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/timetable/monday',async(req,res)=>{
    try{
        await Timetable.findMondaySlots()

        res.status(200).send()
    }catch(e){
        res.status(404).send({error: "Sorry, No one available for a slot,on Monday"})
    }
})

router.get('/timetable/tuesday',async(req,res)=>{
    try{
        await Timetable.findTuesdaySlots()

        res.status(200).send()
    }catch(e){
        res.status(404).send({error: "Sorry, No one available for a slot,on tuesday"})
    }
})

router.get('/timetable/wednesday',async(req,res)=>{
    try{
        await Timetable.findWednesdaySlots()

        res.status(200).send()
    }catch(e){
        res.status(404).send({error: "Sorry, No one available for a slot,on wednesday"})
    }
})

router.get('/timetable/thursday',async(req,res)=>{
    try{
        await Timetable.findThursdaySlots()

        res.status(200).send()
    }catch(e){
        res.status(404).send({error: "Sorry, No one available for a slot,on thursday"})
    }
})

router.get('/timetable/friday',async(req,res)=>{
    try{
        await Timetable.findFridaySlots()

        res.status(200).send()
    }catch(e){
        res.status(404).send({error: "Sorry, No one available for a slot,on friday"})
    }
})





module.exports = router