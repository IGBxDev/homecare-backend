import dotenv from  'dotenv'
import app from "./app";

dotenv.config()

app.listen(3333, ()=>{
    console.log('Backend server is runing')
})