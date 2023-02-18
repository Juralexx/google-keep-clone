import React from 'react'

type NotesContextType = {
    notes: {
        all: any[],
        filtered: any[]
    },
    setNotes: React.Dispatch<React.SetStateAction<any>>
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
    note: { [keys: string]: any },
    setNote: React.Dispatch<React.SetStateAction<any>>
}

const INoteContextTypeState = {
    note: {},
    setNote: () => { }
}

export const NoteContext = React.createContext<NoteContextType>(INoteContextTypeState)