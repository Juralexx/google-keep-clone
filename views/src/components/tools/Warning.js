import styled from 'styled-components'
import { Button, TextButton } from './Button'
import Icon from './icons/Icon'

const Warning = (props) => {
    const { open, setOpen, title, text, cancelBtn, validateBtn, onValidate, onClose, className } = props

    const close = onClose ? () => {
        setOpen(false)
        onClose()
    } : () => setOpen(false)

    const validate = onValidate ? () => {
        setOpen(false)
        onValidate()
    } : () => setOpen(false)

    return (
        <>
            <ModalWrapper className={open ? "modal_wrapper" : "modal_wrapper hide_wrapper"}>
                <div className={`modal_container warning_modal ${open ? 'show_modal' : 'hide_modal'}`}>
                    <div className="close_modal" onClick={close}>
                        <Icon name="Cross" />
                    </div>
                    <div className="warning_title">{title}</div>
                    <div className="warning_text">{text}</div>
                    {props.children}
                    <div className="btn_container">
                        <TextButton className="mr-2" onClick={close}>
                            {cancelBtn || "Annuler"}
                        </TextButton>
                        <Button className={className ? className : ""} onClick={validate}>
                            {validateBtn || "Valider"}
                        </Button>
                    </div>
                </div>
            </ModalWrapper>
            <ModalCover className={open ? 'modal_cover modal_cover-active' : 'modal_cover'} onClick={close} />
        </>
    )
}

export default Warning

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
        min-height       : 300px;
        max-height       : 70vh;
        padding          : 15px;
        color            : var(--text);
        background-color : var(--content-light);
        border-radius    : var(--rounded-sm);
        box-shadow       : var(--shadow-xl);
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
    
        .close_modal {
            position         : absolute;
            padding          : 5px;
            top              : 7px;
            right            : 5px;
            cursor           : pointer;
            border-radius    : 30px;
    
            svg {
                width  : 22px;
                height : 22px;
            }
    
            &:hover {
                background-color : var(--content-x-light);
            }
        }

        .btn_container {
            position        : relative;
            margin-top      : auto;
            display         : flex;
            justify-content : flex-end;
            margin-top      : 15px;
    
            button {
                width : 100%;
            }
        }

        &.warning_modal {
            max-width  : 480px;
            min-height : unset !important;

            .warning_title {
                font-size : 18px;
                width     : 90%;
            }

            .warning_text {
                padding : 20px 0;
                color   : var(--text-secondary);
            }

            .btn_container {
                margin-top : 10px;
                padding    : 0;
            }
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