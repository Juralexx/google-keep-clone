import express from 'express'
import { getAllNotes, findNoteById, createNote, deleteNote, updateNote } from '../controllers/note.controller.js'
const noteRoutes = express.Router()

noteRoutes.get('/', getAllNotes)
noteRoutes.get('/:id', findNoteById)

noteRoutes.post('/add', createNote)
noteRoutes.put('/update/:id', updateNote)
noteRoutes.delete('/delete/:id', deleteNote)

export default noteRoutes;