export { };

export namespace Area {
    export interface Props {
        title: string,
        text: string,
        color: string,
        background: string
    }

    export const defaultProps: Props = {
        title: '',
        text: '',
        color: '',
        background: ''
    }
}

/**
 * 
 */

export namespace Notes {
    export interface Props {
        all: any[],
        filtered: any[]
    }

    export const defaultProps: Props = {
        all: [],
        filtered: []
    }
}

/**
 * 
 */

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

/**
 * 
 */

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