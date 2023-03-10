import React from 'react'
import styled from 'styled-components'
import Modal from './tools/Modal'
import Icon from './tools/icons/Icon'
import PaletteNote from './PaletteNote'
import { ClassicInput, Textarea } from './tools/Inputs'
import useUndo from './tools/hooks/useUndo'
import { deleteNote, findNote, updateNote } from './functions/functions'
import { numericDateParser } from './tools/Utils'
import { NoteContext, NotesContext } from '../AppContexts'
import { NoteProps } from '../types/types'
import Warning from './tools/Warning'

interface Props {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NoteModal: React.FC<Props> = ({ open, setOpen }) => {
    const { notes, setNotes } = React.useContext(NotesContext)
    const { note, setNote } = React.useContext(NoteContext)

    const { handleChange, resetState, undo, redo, canUndo, canRedo } = useUndo(note.text, setNote)

    const updateText = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { array, current, index } = findNote(notes, note)
        array[index] = { ...current, text: event.target.value }
        setNotes({ all: [...array], filtered: [...array] })
        handleChange(event.target.value)
        setNote((prev: NoteProps) => ({ ...prev, text: event.target.value }))
    }

    const updateTitle = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const { array, current, index } = findNote(notes, note)
        array[index] = { ...current, title: event.target.value }
        setNotes({ all: [...array], filtered: [...array] })
        setNote((prev: NoteProps) => ({ ...prev, title: event.target.value }))
    }

    const deleteItem = async () => {
        const { array, index } = findNote(notes, note)
        array.splice(index, 1)
        setNotes({ all: [...array], filtered: [...array] })
        setOpen(false)
        await deleteNote(note)
    }

    React.useEffect(() => {
        if (!open) {
            if (note._id !== undefined) {
                const modifyNote = async () => await updateNote(note)
                modifyNote()
            }
        }
    }, [open, note])

    const [warning, setWarning] = React.useState<boolean>(false)

    return (
        <>
            <Modal open={open} setOpen={setOpen} style={{ backgroundColor: note.color ? note.color : '#ffffff' }}>
                <NoteTop background={note.background}>
                    <ClassicInput
                        type="text"
                        placeholder="Title"
                        value={note.title}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateTitle(event)}
                    />
                    <Textarea
                        type="text"
                        id="textarea"
                        placeholder="Take a note..."
                        value={note.text}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateText(event)}
                    />
                    <div className='__date'>
                        Last update : {numericDateParser(note.updatedAt)}
                    </div>
                </NoteTop>
                <NoteBottom>
                    <div className='__buttons'>
                        <PaletteNote
                            note={note}
                            position='top'
                        />
                        <button className='__buttons-btn' onClick={() => undo()} disabled={!canUndo}>
                            <Icon name="Undo" />
                        </button>
                        <button className='__buttons-btn' onClick={() => redo()} disabled={!canRedo}>
                            <Icon name="Undo" />
                        </button>
                        <button className='__buttons-btn' onClick={() => resetState()} disabled={note.text!.length === 0}>
                            <Icon name="Reset" />
                        </button>
                        <button className='__buttons-btn' onClick={() => {
                            setWarning(true)
                            setOpen(false)
                        }}>
                            <Icon name="Trash" />
                        </button>
                    </div>
                    <div className='actions__buttons'>
                        <button className='close__btn' onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </div>
                </NoteBottom>
            </Modal>
            <Warning
                title='Do you really want to delete this note ?'
                text='This action is irreversible.'
                cancelBtn='Cancel'
                validateBtn='Delete'
                onValidate={() => {
                    deleteItem()
                    setOpen(false)
                }}
                onClose={() => setOpen(true)}
                open={warning}
                setOpen={setWarning}
            />
        </>
    )
}

export default NoteModal

const NoteTop = styled.div<{ background: any }>`
    background-repeat   : no-repeat;
    background-position : center center;
    background-size     : cover;
    border-radius       : var(--rounded-lg) var(--rounded-lg) 0 0;
    ${(props: any) => props.background &&
        `background-image : url(${props.background})`
    };

    .__date {
        padding    : 5px 10px;
        font-size  : 12px;
        text-align : right;
    }

    textarea {
        height     : auto;
        min-height : 100px;
    }
`

const NoteBottom = styled.div`
    display          : flex;
    align-items      : center;
    justify-content  : space-between;
    width            : 100%;
    height           : 44px;
    padding          : 10px 0;
    background-color : var(--body);
    border-radius    : var(--ronded-lg);

    .__buttons {
        position    : relative;
        display     : flex;
        align-items : center;
        height      : 100%;

        .__buttons-btn {
            height        : 32px;
            width         : 32px;
            padding       : 6px;
            margin        : 0 8px;
            border-radius : var(--rounded-full);
            cursor        : pointer;
            opacity : 1;

            &:nth-child(3) {
                transform: scale(-1, 1);
            }

            &:hover,
            &.active {
                background-color : var(--content);
            }

            &:disabled {
                opacity : 0.3;
            }
        }

        svg {
            width  : 20px;
            height : 20px;
        }
    }

    .actions__buttons {
        display     : flex;
        align-items : center;
    }

    .close__btn {
        text-overflow  : ellipsis;
        letter-spacing : .01785714em;
        font-weight    : 500;
        line-height    : 1.25rem;
        height         : 32px;
        padding        : 6px 24px;
        margin-right   : 15px;
        border-radius  : var(--rounded-md);

        &:hover {
            background-color : var(--content);
        }
    }
`