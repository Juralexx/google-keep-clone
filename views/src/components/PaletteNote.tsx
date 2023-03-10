import React from 'react'
import styled from 'styled-components'
import { NoteProps } from '../types/types'
import Icon from './tools/icons/Icon'
import { useClickOutside } from './tools/hooks/useClickOutside'
import { addActive } from './tools/Utils'
import { findNote, updateNote } from './functions/functions'
import { colors } from './functions/datas'
import { NoteContext, NotesContext } from '../AppContexts'

interface Props {
    note: NoteProps,
    position?: any,
}

const PaletteNote: React.FC<Props> = ({ note, position }) => {
    const { notes, setNotes } = React.useContext(NotesContext)
    const { setNote } = React.useContext(NoteContext)

    const paletteRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
    const [palette, setPalette] = React.useState<boolean>(false)
    useClickOutside(paletteRef, () => setPalette(false))

    const updateBackground = async (background: string) => {
        const { array, current, index } = findNote(notes, note)
        array[index] = { ...current, background: background }
        setNotes({ all: [...array], filtered: [...array] })
        setNote((prev: NoteProps) => ({ ...prev, background: background }))
        await updateNote({ ...current, background: background })
    }

    const updateColor = async (color: string) => {
        const { array, current, index } = findNote(notes, note)
        array[index] = { ...current, color: color }
        setNotes({ all: [...array], filtered: [...array] })
        setNote((prev: NoteProps) => ({ ...prev, color: color }))
        await updateNote({ ...current, color: color })
    }

    return (
        <div className={`__buttons-btn ${addActive(palette)}`} ref={paletteRef}>
            <Icon name="Palette" onClick={() => setPalette(!palette)} />
            {palette &&
                <PaletteContainer position={position}>
                    <div className='palette__displayer-top'>
                        {colors.map((color, i) => {
                            return (
                                <div key={i}
                                    className={`palette__item ${addActive(note.color === color.hex)}`}
                                    style={{ backgroundColor: color.hex }}
                                    onClick={() => updateColor(color.hex)}
                                >
                                    {note.color === color.hex && <Icon name="Check" />}
                                </div>
                            )
                        })}
                    </div>
                    <div className='palette__displayer-bottom'>
                        <div className={`palette__img ${addActive(note.background === '')}`}
                            onClick={() => updateBackground('')}
                        >
                            <img src={`${process.env.REACT_APP_URL}/backgrounds/empty_img.png`} alt='empty-img' />
                        </div>
                        {[...new Array(9)].map((_, i) => {
                            const bg = `${process.env.REACT_APP_URL}/backgrounds/background-${i + 1}.svg`
                            return (
                                <div key={i}
                                    className={`palette__img ${addActive(note.background === bg)}`}
                                    onClick={() => updateBackground(bg)}
                                >
                                    <img src={bg} alt={`background-${i + 1}.svg`} />
                                    {note.background === bg &&
                                        <Icon name="Check" />
                                    }
                                </div>
                            )
                        })}
                    </div>
                </PaletteContainer>
            }
        </div>
    )
}

export default PaletteNote

const PaletteContainer = styled.div<{ position: any }>`
    position      : absolute;
    top           : 100%;
    left          : 5px;
    background    : var(--body);
    border-radius : var(--rounded-lg);
    box-shadow    : var(--shadow-tiny);
    ${props => props.position === 'top' && `
        bottom : 100%;
        top : unset;
    `};

    .palette__displayer-top {
        display         : flex;
        align-items     : center;
        justify-content : space-between;
        padding         : 5px;
        border-radius   : var(--rounded-lg);

        .palette__item {
            position      : relative;
            height        : 30px;
            width         : 30px;
            border-radius : var(--rounded-full);
            margin        : 0 2px;

            &:first-child {
                border : 1px solid var(--light-border);
            }

            &:hover,
            &.active {
                border : 2px solid var(--text);
            }

            svg {
                position      : absolute;
                top           : -5px;
                right         : -5px;
                padding       : 1px;
                border-radius : var(--rounded-full);
                color         : white;
                background    : #a142f4;
            }
        }
    }

    .palette__displayer-bottom {
        display         : flex;
        align-items     : center;
        justify-content : space-between;
        padding         : 5px;
        border-radius   : var(--rounded-lg);

        .palette__img {
            position      : relative;
            min-height    : 40px;
            min-width     : 40px;
            border-radius : var(--rounded-full);
            margin        : 0 2px;
        
            img {
                border-radius : var(--rounded-full);
            }

            &:first-child {
                padding : 8px;
                border  : 1px solid var(--light-border);
            }

            &:hover,
            &.active {
                border : 2px solid var(--text);
            }

            svg {
                position      : absolute;
                top           : -5px;
                right         : -5px;
                padding       : 1px;
                border-radius : var(--rounded-full);
                color         : white;
                background    : #a142f4;
            }
        }
    }
`