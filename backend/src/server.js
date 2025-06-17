import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import { connnectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connnectDB();

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
  //process.exit(1); //exit with failure
});
