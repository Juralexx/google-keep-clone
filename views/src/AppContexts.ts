import React from 'react'
import { NoteProps, Notes } from './types/types'

type NotesContextType = {
    notes: Notes.Props,
    setNotes: React.Dispatch<React.SetStateAction<Notes.Props>>
}

const INotesContextTypeState = {
    notes: {
        all: [],
        filtered: []
    },
    setNotes: () => { }
}

export const NotesContext = React.createContext<NotesContextType>(INotesContextTypeState)

type NoteContextType = {
    note: NoteProps,
    setNote: React.Dispatch<React.SetStateAction<NoteProps>>
}

const INoteContextTypeState = {
    note: {},
    setNote: () => { }
}

export const NoteContext = React.createContext<NoteContextType>(INoteContextTypeState)