import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware to handle JSON requests

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from the frontend
  methods: ['GET', 'POST', 'PUT'], // Allow only GET and POST methods and PUT for updates
  credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json()); //PARSES JSON data in request body
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });
});

