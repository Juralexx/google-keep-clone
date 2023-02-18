import React from 'react'
import styled from 'styled-components'
import { useClickOutside } from './hooks/useClickOutside'

const Modal = (props) => {
    const { open, setOpen, onClose, style } = props
    const modalRef = React.useRef()

    const close = () => {
        if (onClose) {
            onClose()
        } else {
            if (open !== typeof Object)
                setOpen(false)
            else setOpen(prevState => ({ ...prevState, open: false }))
        }
    }

    useClickOutside(modalRef, () => close())

    return (
        <>
            <ModalWrapper className={`modal_wrapper ${open ? '' : 'hide_wrapper'}`}>
                <div
                    className={`modal_container ${open ? 'show_modal' : 'hide_modal'}`}
                    ref={modalRef}
                    style={style}
                >
                    {props.children}
                </div>
            </ModalWrapper>
            <ModalCover
                className={open ? 'modal_cover modal_cover-active' : 'modal_cover'}
                onClick={() => close()}
            />
        </>
    )
}

export default Modal

/**
 * 
 */

const ModalWrapper = styled.div`
    position        : fixed;
    top             : 0;
    right           : 0;
    bottom          : 0;
    left            : 0;
    visibility      : visible;
    z-index         : 100000000000;
    display         : flex;
    align-items     : center;
    backdrop-filter : blur(1px);

    &.hide_wrapper {
        visibility : hidden;
    }

    .modal_container {
        margin           : auto;
        width            : 500px;
        max-height       : 70vh;
        /* padding          : 15px; */
        color            : var(--text);
        background-color : var(--body);
        border-radius    : var(--rounded-lg);
        box-shadow       : var(--shadow-xl), var(--shadow-relief);
        z-index          : 100000000000;
        overflow         : hidden;

        @media(max-width: 768px) {
            width : 85%;
        }

        @media(max-width: 576px) {
            width : 100vw;
        }
    
        h2 {
            margin-bottom : 10px;
            font-size     : 20px !important;
            font-weight   : 600;
        }
    
        &.hide_modal {
            opacity    : 0;
            visibility : hidden;
            transform  : scale(0.8);
            transition : visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        }
    
        &.show_modal {
            opacity    : 1;
            visibility : visible;
            transform  : scale(1);
            transition : visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
        }
    }
`

const ModalCover = styled.div`
    display    : none;
    position   : fixed;
    top        : 0;
    bottom     : 0;
    left       : 0;
    right      : 0;
    background : var(--modal-cover);
    z-index    : 100000;

    &.modal_cover-active {
        display : block;
    }
`