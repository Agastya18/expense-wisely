import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import users from './data.js';
import connectDB from './config/connectDb.js';
dotenv.config();
const app = express();
const PORT=process.env.PORT || 8000



//middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())


app.use('/',(req, res, next) => {

    res.send({users});
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Serve running at:  http://localhost:${PORT}`);
})