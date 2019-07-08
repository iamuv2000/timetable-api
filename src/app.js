const express = require('express')
require('./db/mongoos')
const timetable = require('./models/timetable')
const dutiesRouter = require('./models/duties')
const timetableRouter = require('./routers/timetable')


const app = express()

app.use(express.json())
app.use(timetableRouter)
app.use(dutiesRouter)

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log("Server is up on ", port)
})