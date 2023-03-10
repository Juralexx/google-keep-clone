import axios from "axios"
import { NoteProps, Notes } from "../../types/types"

export const findNote = (notes: Notes.Props, note: NoteProps) => {
    let array: any[] = [...notes.all]
    let current: NoteProps = array.find((e: NoteProps) => e._id === note._id)
    let index: number = array.findIndex((e: NoteProps) => e._id === note._id)
    return {
        array: array,
        current: current,
        index: index
    }
}

export const getNote = async (noteId: string) => {
    return await axios
        .get(`${process.env.REACT_APP_API_URL}/api/note/${noteId}`)
        .then(res => { return res.data })
        .catch(err => console.error(err))
}

/**
 * 
 */

export const createNote = async (note: NoteProps) => {
    return await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/note/add`,
        data: {
            _id: note._id,
            title: note.title,
            text: note.text,
            color: note.color,
            background: note.background
        }
    })
        .then(res => res.data)
        .catch(err => console.error(err))
}

/**
 * 
 */

export const updateNote = async (note: NoteProps) => {
    try {
        return await axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}/api/note/update/${note._id}`,
            data: {
                title: note.title,
                text: note.text,
                color: note.color,
                background: note.background
            }
        })
            .then(res => res.data)
            .catch(err => console.error(err))
    } catch (err) {
        console.error(err)
    }
}

/**
 * 
 */

export const deleteNote = async (note: NoteProps) => {
    return await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}/api/note/delete/${note._id}`
    })
        .then(res => res.data)
        .catch(err => console.error(err))
}