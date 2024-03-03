import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import users from './data.js';
import connectDB from './config/connectDb.js';
import userRoute from './routes/user.route.js';
import transactionRoute from './routes/transaction.route.js';
//import cors from 'cors';
dotenv.config();
const app = express();
const PORT=process.env.PORT || 8000





//middlewares
app.use(express.json());
// app.use(cors(
//     {
//         origin:"http://localhost:5173",
//         credentials:true
//     }
// ));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

//routes
app.use('/api/users', userRoute);
app.use('/api/transactions', transactionRoute);


// app.use('/',(req, res, next) => {

//     res.send({users});
// })

app.listen(PORT, () => {
    connectDB();
    console.log(`Serve running at:  http://localhost:${PORT}`);
})