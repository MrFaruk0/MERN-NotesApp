import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import { connnectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware to handle JSON requests
app.use("/api/notes", noteRoutes);
app.use(express.json()); //PARSES JSON data in request body
app.use(rateLimiter);

connnectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });
});

