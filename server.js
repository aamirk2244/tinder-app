import express from 'express'
import cors from 'cors'
import tinder from './api/tinder.route.js'


const app = express()



app.use(cors())

app.use(express.json())

app.use('/api/v1/tinder', tinder)    // means if this url is requested , follow the  tinder which is the module of tinder.rout.js ( i.e go to api/tinder.rout.js file)
// app.use('*', (req,res)=> res.status(404).json({error:'not found'}))

export default app