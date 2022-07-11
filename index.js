import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000    // MEANS get the port from env variable (i.e .env file) if that didn't work then use 8000 instead

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS:  2500,
        // useNewUrlParse: true
    }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
}).then(async client=>{
    app.listen(port,()=> {
        console.log(`listening on port ${port}`)
    })
})