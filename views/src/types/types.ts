export { };

export interface AreaProps {
    title: string,
    text: string,
    color: string,
    background: string
}

export const defaultAreaProps: AreaProps = {
    title: '',
    text: '',
    color: '',
    background: ''
}

export interface NotesProps {
    all: any[],
    filtered: any[]
}

export const defaultNotesProps: NotesProps = {
    all: [],
    filtered: []
}

export interface NoteProps {
    _id?: string,
    title?: string,
    text?: string,
    color?: string,
    background?: string,
    createdAt?: string,
    updatedAt?: string
}

export const defaultNoteProps: NoteProps = {
    title: '',
    text: '',
    color: '',
    background: ''
}

export interface SearchProps {
    state: boolean,
    query: string,
    results: any,
}

export const defaultSearchProps: SearchProps = {
    state: false,
    query: '',
    results: [],
}