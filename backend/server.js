import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const PORT=process.env.PORT || 8000



//middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())


app.use('/',(req, res, next) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Serve running at:  http://localhost:${PORT}`);
})