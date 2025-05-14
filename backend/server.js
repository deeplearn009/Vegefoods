import express from 'express';
import cors from 'cors';
import router from "./routes/router.js";
import connectDB from "./config/config.js";
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors('*'))

app.use('/', router)

connectDB()

app.listen(6060, () => {
    console.log('Server started on port 6060 ')
})