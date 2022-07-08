import express from 'express'

import leadRouter from './handlers/leadHandler'
import studentsRouter from './handlers/studentsRouter'

const app:express.Application=express()
const port:Number =8000

//instantiate the route 

leadRouter(app)
studentsRouter(app)

app.listen(port ,()=>{console.log(`the server was initiated on port ${port}`)})