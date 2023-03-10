import React from 'react'
import styled from 'styled-components'
import { NotesContext } from '../AppContexts'
import { Area, Notes } from '../types/types'
import Palette from './Palette'
import Icon from './tools/icons/Icon'
import { ClassicInput, Textarea } from './tools/Inputs'
import { randomNbLtID } from './tools/Utils'
import { createNote } from './functions/functions'
import useUndo from './tools/hooks/useUndo'
import { useClickOutside } from './tools/hooks/useClickOutside'

const NoteArea: React.FC = () => {
    const { setNotes } = React.useContext(NotesContext)
    const [area, setArea] = React.useState<Area.Props>(Area.defaultProps)

    const [open, setOpen] = React.useState<boolean>(false)
    const noteAreaRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
    useClickOutside(noteAreaRef, async () => {
        setOpen(false)
        if (area.text.trim().length || area.title.trim().length || area.color.trim().length || area.background.trim().length) {
            const element = Object.assign(area, { _id: randomNbLtID(24) })
            setNotes((prev: Notes.Props) => ({ all: [element, ...prev.all], filtered: [element, ...prev.filtered] }))
            setArea(Area.defaultProps)
            await createNote(element)
        }
    })

    const { handleChange, resetState, undo, redo, canUndo, canRedo } = useUndo(area.text, setArea)

    const addNote = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (area.text.trim().length || area.title.trim().length || area.color.trim().length || area.background.trim().length) {
                const element = Object.assign(area, { _id: randomNbLtID(24) })
                setNotes((prev: Notes.Props) => ({ all: [element, ...prev.all], filtered: [element, ...prev.filtered] }))
                setArea(Area.defaultProps)
                await createNote(element)
            }
        }
    }

    return (
        open ? (
            <Note ref={noteAreaRef} style={{ backgroundColor: area.color ? area.color : 'transparent' }}>
                <NoteTop background={area.background}>
                    <ClassicInput
                        type="text"
                        placeholder="Title"
                        value={area.title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArea((prev: Area.Props) => ({ ...prev, title: e.target.value }))}
                        cross
                        onClean={() => setArea((prev: Area.Props) => ({ ...prev, title: '' }))}
                        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => addNote(event)}
                    />
                    <Textarea
                        type="text"
                        id="textarea"
                        placeholder="Take a note..."
                        value={area.text}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                        onKeyPress={(event: React.KeyboardEvent<HTMLInputElement>) => addNote(event)}
                    />
                </NoteTop>
                <NoteBottom>
                    <div className='__buttons'>
                        <Palette
                            note={area}
                            setNote={setArea}
                        />
                        <button className='__buttons-btn' onClick={() => undo()} disabled={!canUndo}>
                            <Icon name="Undo" />
                        </button>
                        <button className='__buttons-btn' onClick={() => redo()} disabled={!canRedo}>
                            <Icon name="Undo" />
                        </button>
                        <button className='__buttons-btn' onClick={() => resetState()} disabled={area.text.length === 0}>
                            <Icon name="Reset" />
                        </button>
                    </div>
                    <div className='actions__buttons'>
                        <button className='close__btn' onClick={() => setOpen(false)}>
                            Close
                        </button>
                    </div>
                </NoteBottom>
            </Note>
        ) : (
            <EmptyNote onClick={() => {
                setOpen(true)
                const timeout = setTimeout(() => document.getElementById('textarea')!.focus(), 500)
                return () => clearTimeout(timeout)
            }}>
                <p>Take a note...</p>
                {/* <div className='__buttons'>
                    <div className='__buttons-btn'>
                        <Icon name="Check" />
                    </div>
                </div> */}
            </EmptyNote>
        )
    )
}

export default NoteArea

const Note = styled.div`
    position      : relative;
    width         : 100%;
    max-width     : 600px;
    min-height    : 46px;
    height        : auto;
    margin        : 0 auto;
    border-radius : var(--rounded-lg);
    box-shadow    : var(--shadow-tiny);
    cursor        : text;
    z-index       : 2;
`

const NoteTop = styled.div<{ background: any }>`
    background-repeat   : no-repeat;
    background-position : center center;
    background-size     : cover;
    border-radius       : var(--rounded-lg) var(--rounded-lg) 0 0;
    ${(props: any) => props.background &&
        `background-image : url(${props.background})`
    };
`

const NoteBottom = styled.div`
    display         : flex;
    align-items     : center;
    justify-content : space-between;
    width           : 100%;
    height          : 44px;
    padding         : 10px 0;
    border-radius   : var(--ronded-lg);

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

const EmptyNote = styled.div`
    position        : relative;
    width           : 100%;
    max-width       : 600px;
    min-height      : 46px;
    display         : flex;
    align-items     : center;
    justify-content : space-between;
    padding         : 12px 16px;
    margin          : 0 auto;
    border-radius   : var(--rounded-lg);
    box-shadow      : var(--shadow-tiny);
    cursor          : text;

    p {
        letter-spacing : .00625em;
        font-size      : 1rem;
        font-weight    : 500;
        line-height    : 1.5rem;
    }

    .__buttons {
        display     : flex;
        align-items : center;
        position    : absolute;
        right       : 16px;
        height      : 100%;

        .__buttons-btn {
            height        : 46px;
            width         : 46px;
            padding       : 13px;
            border-radius : var(--rounded-full);
            cursor        : pointer;

            &:hover {
                background-color : var(--content);
            }
        }

        svg {
            width  : 20px;
            height : 20px;

            &:first-child {
                border        : 2px solid var(--text);
                border-radius : var(--rounded-sm);
            }
        }
    }
`