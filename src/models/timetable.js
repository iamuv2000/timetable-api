const mongoose = require('mongoose')
const validator = require('validator')
const Duties = require('../models/duties')

const timetableSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    regNumber: {
        // validate(value){
        //     if(!value.match(/ ^\d\d\w\w\w\d\d\d\d$/)){
        //         throw new Error('Invalid registration number')
        //     }
        // } 
    },

    monday: [{

        first:{
            type: Boolean,
        },

        second:{
            type: Boolean
        },
        third:{
            type: Boolean,
        },

        fourth:{
            type: Boolean
        },
        fifth:{
            type: Boolean,
        },

        sixth:{
            type: Boolean
        },
        seventh:{
            type: Boolean,
        },

        eight:{
            type: Boolean
        },
        ninth:{
            type: Boolean,
        },

        tenth:{
            type: Boolean
        },

    }],

    tuesday: [{

        first:{
            type: Boolean,
        },

        second:{
            type: Boolean
        },
        third:{
            type: Boolean,
        },

        fourth:{
            type: Boolean
        },
        fifth:{
            type: Boolean,
        },

        sixth:{
            type: Boolean
        },
        seventh:{
            type: Boolean,
        },

        eight:{
            type: Boolean
        },
        ninth:{
            type: Boolean,
        },

        tenth:{
            type: Boolean
        },

    }],
    wednesday: [{

        first:{
            type: Boolean,
        },

        second:{
            type: Boolean
        },
        third:{
            type: Boolean,
        },

        fourth:{
            type: Boolean
        },
        fifth:{
            type: Boolean,
        },

        sixth:{
            type: Boolean
        },
        seventh:{
            type: Boolean,
        },

        eight:{
            type: Boolean
        },
        ninth:{
            type: Boolean,
        },

        tenth:{
            type: Boolean
        },

    }],
    thursday: [{

        first:{
            type: Boolean,
        },

        second:{
            type: Boolean
        },
        third:{
            type: Boolean,
        },

        fourth:{
            type: Boolean
        },
        fifth:{
            type: Boolean,
        },

        sixth:{
            type: Boolean
        },
        seventh:{
            type: Boolean,
        },

        eight:{
            type: Boolean
        },
        ninth:{
            type: Boolean,
        },

        tenth:{
            type: Boolean
        },

    }],
    friday: [{

        first:{
            type: Boolean,
        },

        second:{
            type: Boolean
        },
        third:{
            type: Boolean,
        },

        fourth:{
            type: Boolean
        },
        fifth:{
            type: Boolean,
        },

        sixth:{
            type: Boolean
        },
        seventh:{
            type: Boolean,
        },

        eight:{
            type: Boolean
        },
        ninth:{
            type: Boolean,
        },

        tenth:{
            type: Boolean
        },

    }],
})

//MONDAY
timetableSchema.statics.findMondaySlots = async() =>{
    //monday.first
        // let timetable_db = await Timetable.find({})
        // let allNames = timetable_db.map(a=>a.name)
    let monday = await Timetable.find({"monday.first":true})
    let names = monday.map(a=>a.name)
    let randomNum = Math.floor(Math.random() * names.length)
    let randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    let option = names[randomNum]
    let optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    let duties = new Duties({"monday.first": option})
    await duties.save()


    //monday.second
    monday = await Timetable.find({"monday.second":true})
    names = monday.map(a=>a.name)
    // let available = allNames.filter((val)=>{
    //     return names.indexOf(val) != -1;
    // })
    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    duties = new Duties({"monday.second": option})
    await duties.save()


    //monday.third
    monday = await Timetable.find({"monday.third":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.third": option})
    await duties.save()


    //monday.fourth


    monday = await Timetable.find({"monday.fourth":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.fourth": option})
    await duties.save()

    //monday.fifth


    monday = await Timetable.find({"monday.fifth":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.fifth": option})
    await duties.save()

    //monday.sixth

    monday = await Timetable.find({"monday.sixth":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.sixth": option})
    await duties.save()


    //monday.seventh

    monday = await Timetable.find({"monday.seventh":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.seventh": option})
    await duties.save()

    
    

    //monday.eight
    
    monday = await Timetable.find({"monday.eight":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.eight": option})
    await duties.save()



    //monday.ninth

    monday = await Timetable.find({"monday.ninth":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.ninth": option})
    await duties.save()



    //monday.tenth
    monday = await Timetable.find({"monday.tenth":true})
    names = monday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"monday.tenth": option})
    await duties.save()

}

//TUESDAY
timetableSchema.statics.findTuesdaySlots = async() =>{
    //tuesday.first
        // let timetable_db = await Timetable.find({})
        // let allNames = timetable_db.map(a=>a.name)
    let tuesday = await Timetable.find({"tuesday.first":true})
    let names = tuesday.map(a=>a.name)
    let randomNum = Math.floor(Math.random() * names.length)
    let randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    let option = names[randomNum]
    let optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    let duties = new Duties({"tuesday.first": option})
    await duties.save()


    //tuesday.second
    tuesday = await Timetable.find({"tuesday.second":true})
    names = tuesday.map(a=>a.name)
    // let available = allNames.filter((val)=>{
    //     return names.indexOf(val) != -1;
    // })
    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.second": option})
    await duties.save()


    //tuesday.third
    tuesday = await Timetable.find({"tuesday.third":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.third": option})
    await duties.save()


    //tuesday.fourth


    tuesday = await Timetable.find({"tuesday.fourth":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.fourth": option})
    await duties.save()

    //tuesday.fifth


    tuesday = await Timetable.find({"tuesday.fifth":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.fifth": option})
    await duties.save()

    //tuesday.sixth

    tuesday = await Timetable.find({"tuesday.sixth":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.sixth": option})
    await duties.save()


    //tuesday.seventh

    tuesday = await Timetable.find({"tuesday.seventh":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.seventh": option})
    await duties.save()

    
    

    //tuesday.eight
    
    tuesday = await Timetable.find({"tuesday.eight":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.eight": option})
    await duties.save()



    //tuesday.ninth

    tuesday = await Timetable.find({"tuesday.ninth":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.ninth": option})
    await duties.save()



    //tuesday.tenth
    tuesday = await Timetable.find({"tuesday.tenth":true})
    names = tuesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"tuesday.tenth": option})
    await duties.save()

}

//WEDNESDAY
timetableSchema.statics.findWednesdaySlots = async() =>{
    //wednesday.first
        // let timetable_db = await Timetable.find({})
        // let allNames = timetable_db.map(a=>a.name)
    let wednesday = await Timetable.find({"wednesday.first":true})
    let names = wednesday.map(a=>a.name)
    let randomNum = Math.floor(Math.random() * names.length)
    let randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    let option = names[randomNum]
    let optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    let duties = new Duties({"wednesday.first": option})
    await duties.save()


    //wednesday.second
    wednesday = await Timetable.find({"wednesday.second":true})
    names = wednesday.map(a=>a.name)
    // let available = allNames.filter((val)=>{
    //     return names.indexOf(val) != -1;
    // })
    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.second": option})
    await duties.save()


    //wednesday.third
    wednesday = await Timetable.find({"wednesday.third":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.third": option})
    await duties.save()


    //wednesday.fourth


    wednesday = await Timetable.find({"wednesday.fourth":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.fourth": option})
    await duties.save()

    //wednesday.fifth


    wednesday = await Timetable.find({"wednesday.fifth":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.fifth": option})
    await duties.save()

    //wednesday.sixth

    wednesday = await Timetable.find({"wednesday.sixth":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.sixth": option})
    await duties.save()


    //wednesday.seventh

    wednesday = await Timetable.find({"wednesday.seventh":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.seventh": option})
    await duties.save()

    
    

    //wednesday.eight
    
    wednesday = await Timetable.find({"wednesday.eight":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.eight": option})
    await duties.save()



    //wednesday.ninth

    wednesday = await Timetable.find({"wednesday.ninth":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.ninth": option})
    await duties.save()



    //wednesday.tenth
    wednesday = await Timetable.find({"wednesday.tenth":true})
    names = wednesday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"wednesday.tenth": option})
    await duties.save()

}

//THURSDAY
timetableSchema.statics.findThursdaySlots = async() =>{
    //thursday.first
        // let timetable_db = await Timetable.find({})
        // let allNames = timetable_db.map(a=>a.name)
    let thursday = await Timetable.find({"thursday.first":true})
    let names = thursday.map(a=>a.name)
    let randomNum = Math.floor(Math.random() * names.length)
    let randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    let option = names[randomNum]
    let optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    let duties = new Duties({"thursday.first": option})
    await duties.save()


    //thursday.second
    thursday = await Timetable.find({"thursday.second":true})
    names = thursday.map(a=>a.name)
    // let available = allNames.filter((val)=>{
    //     return names.indexOf(val) != -1;
    // })
    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    duties = new Duties({"thursday.second": option})
    await duties.save()


    //thursday.third
    thursday = await Timetable.find({"thursday.third":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.third": option})
    await duties.save()


    //thursday.fourth


    thursday = await Timetable.find({"thursday.fourth":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.fourth": option})
    await duties.save()

    //thursday.fifth


    thursday = await Timetable.find({"thursday.fifth":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.fifth": option})
    await duties.save()

    //thursday.sixth

    thursday = await Timetable.find({"thursday.sixth":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.sixth": option})
    await duties.save()


    //thursday.seventh

    thursday = await Timetable.find({"thursday.seventh":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.seventh": option})
    await duties.save()

    
    

    //thursday.eight
    
    thursday = await Timetable.find({"thursday.eight":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.eight": option})
    await duties.save()



    //thursday.ninth

    thursday = await Timetable.find({"thursday.ninth":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.ninth": option})
    await duties.save()



    //thursday.tenth
    thursday = await Timetable.find({"thursday.tenth":true})
    names = thursday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"thursday.tenth": option})
    await duties.save()

}

//FRIDAY
timetableSchema.statics.findFridaySlots = async() =>{
    //friday.first
        // let timetable_db = await Timetable.find({})
        // let allNames = timetable_db.map(a=>a.name)
    let friday = await Timetable.find({"friday.first":true})
    let names = friday.map(a=>a.name)
    let randomNum = Math.floor(Math.random() * names.length)
    let randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    let option = names[randomNum]
    let optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    let duties = new Duties({"friday.first": option})
    await duties.save()


    //friday.second
    friday = await Timetable.find({"friday.second":true})
    names = friday.map(a=>a.name)
    // let available = allNames.filter((val)=>{
    //     return names.indexOf(val) != -1;
    // })
    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]
    // allNames.pop(option)
    // allNames.pop(optionTwo)
    // console.log(allNames)
    option = option.concat(optionTwo)
    duties = new Duties({"friday.second": option})
    await duties.save()


    //friday.third
    friday = await Timetable.find({"friday.third":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.third": option})
    await duties.save()


    //friday.fourth


    friday = await Timetable.find({"friday.fourth":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.fourth": option})
    await duties.save()

    //friday.fifth


    friday = await Timetable.find({"friday.fifth":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.fifth": option})
    await duties.save()

    //friday.sixth

    friday = await Timetable.find({"friday.sixth":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.sixth": option})
    await duties.save()


    //friday.seventh

    friday = await Timetable.find({"friday.seventh":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.seventh": option})
    await duties.save()

    
    

    //friday.eight
    
    friday = await Timetable.find({"friday.eight":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.eight": option})
    await duties.save()



    //friday.ninth

    friday = await Timetable.find({"friday.ninth":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.ninth": option})
    await duties.save()



    //friday.tenth
    friday = await Timetable.find({"friday.tenth":true})
    names = friday.map(a=>a.name)

    randomNum = Math.floor(Math.random() * names.length)
    randTwo = Math.floor(Math.random() * names.length)
    if(randTwo===randomNum){
        randTwo=randTwo+1
        if(randTwo>names.length){
            randTwo=randTwo-1
        }
    }
    option = names[randomNum]
    optionTwo = names[randTwo]

    option = option.concat(optionTwo)
    duties = new Duties({"friday.tenth": option})
    await duties.save()

}







const Timetable = mongoose.model('Timetable',timetableSchema)

module.exports = Timetable


/*

slots = [first,second,third,fourth,fifth,sixth,seventh,eight,ninth,tenth]
days = [monday,tuesday,wednesday,thursday,friday]
for(day in days){
    for(slot in slots){
        const day  = await Timetable.find({day(slot):true})
        let names = day.map(a=>a.name)
        console.log("Students free in "+slot+" are: "+names)
    }   
}




*/


// const monday = await Timetable.find({"monday.first":true})
// let names = monday.map(a=>a.name)
// console.log(names)