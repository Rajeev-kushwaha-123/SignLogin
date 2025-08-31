import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config();

const port = 4000;
const app = express();

mongoose.connect(process.env.MONGO_DB)
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("DB connection fail"));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true, // Allow all origins for testing
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("my first app");
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
