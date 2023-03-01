import React from 'react'
import styled from 'styled-components'
import { NoteContext } from '../AppContexts'
import { NoteProps } from '../types/types'
import PaletteNote from './PaletteNote'
import { useClickOutside } from './tools/hooks/useClickOutside'
import { addActive, numericDateParser } from './tools/Utils'

interface NoteProperties {
    element?: NoteProps,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Note: React.FC<NoteProperties> = ({ element, setOpenModal }) => {
    const { setNote } = React.useContext(NoteContext)

    const paletteRef = React.useRef() as React.MutableRefObject<HTMLDivElement>
    const [hovered, setHovered] = React.useState<boolean>(false)
    const [active, setActive] = React.useState<boolean>(false)
    useClickOutside(paletteRef, () => setActive(false))

    return (
        <NoteItem
            background={element!.background}
            color={element!.color}
            className={addActive(hovered)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(!active ? false : true)}
        >
            <div onClick={() => {
                setNote(element!)
                setOpenModal(true)
            }}>
                <div className='note__title'>
                    {element!.title || <em>Empty title...</em>}
                </div>
                <div className='note__body'>
                    {element!.text || <em>Empty body...</em>}
                </div>
            </div>
            <div className='note__tools' ref={paletteRef}>
                <div className='__buttons' onClick={() => setActive(true)}>
                    <PaletteNote
                        note={element!}
                    />
                </div>
            </div>
            <div className='__date'>
                {numericDateParser(element!.createdAt || new Date())}
            </div>
        </NoteItem>
    )
}

export default Note

const NoteItem = styled.div<{ background: any, color: any }>`
    position            : relative;
    width               : 100%;
    margin-bottom       : 20px;
    display             : inline-block;
    vertical-align      : top;
    transition          : all .2s ease-in-out;
    overflow-wrap       : break-word;
    border-radius       : var(--rounded-lg);
    box-shadow          : var(--shadow-tiny);
    cursor              : pointer;
    background-repeat   : no-repeat;
    background-position : center center;
    background-size     : cover;
    background-color    : var(--body);
    ${(props: any) => props.background &&
        `background-image : url(${props.background})`
    };
    ${(props: any) => props.color &&
        `background-color : ${props.color}`
    };

    .note__title {
        position    : relative;
        font-weight : 500;
        padding     : 15px 15px 0;
    }

    .note__body {
        position : relative;
        padding  : 10px 15px 15px;
    }

    em {
        color : var(--placeholder);
    }

    &.active {
        .note__tools {
            .__buttons {
                opacity : 1;
            }
        }
    }

    .note__tools {
        display         : flex;
        align-items     : center;
        justify-content : space-between;
        width           : 100%;
        height          : 44px;
        padding         : 10px 0;
        position        : relative;

        .__buttons {
            position    : relative;
            display     : flex;
            align-items : center;
            height      : 100%;
            z-index     : 100;
            opacity     : 0;

            .__buttons-btn {
                height        : 32px;
                width         : 32px;
                padding       : 6px;
                margin        : 0 8px;
                border-radius : var(--rounded-full);
                cursor        : pointer;

                &:nth-child(3) {
                    transform: scale(-1, 1);
                }

                &:hover,
                &.active {
                    background-color : var(--content);
                }
            }

            svg {
                width  : 20px;
                height : 20px;
            }
        }
    }

    .__date {
        position  : absolute;
        right     : 8px;
        bottom    : 8px;
        font-size : 12px;
    }
`