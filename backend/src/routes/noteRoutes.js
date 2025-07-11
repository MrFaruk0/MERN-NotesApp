import express from 'express';
import { getAllNotes, updateNote, createNote, deleteNote, getNoteById} from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getAllNotes);

router.get("/:id", getNoteById)
  
router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);


export default router;