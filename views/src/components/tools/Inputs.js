import React from 'react'
// import { useClickOutside } from '../hooks/useClickOutside';
import Icon from './icons/Icon';
import styled from 'styled-components';

const inputProps = (props) => {
    return ({
        className: props.inputClassName,
        type: props.type,
        id: props.id,
        name: props.name,
        placeholder: props.placeholder,
        defaultValue: props.defaultValue,
        value: props.value,
        onChange: props.onChange,
        onInput: props.onInput,
        onClick: props.onClick,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        readOnly: props.readOnly,
        disabled: props.disabled,
        min: props.min,
        max: props.max
    })
}

export const IconInput = (props) => {
    const { useRef, value, className, icon, endIcon, cross, onClean, endIconClick } = props
    return (
        <InputIcon className={`${className ? "icon-input " + className : "icon-input"}`}>
            <input
                ref={useRef}
                {...inputProps(props)}
            />
            {icon &&
                <div className="start_icon">
                    {icon}
                </div>
            }
            {cross ? (
                (value && value.length > 0) ? (
                    <div onClick={onClean} className="svg_container">
                        <Icon name="Cross" className="cross" />
                    </div>
                ) : (
                    endIcon && (
                        <div className="end_icon" onClick={endIconClick}>
                            {endIcon}
                        </div>
                    )
                )
            ) : (
                endIcon && (
                    <div className="end_icon" onClick={endIconClick}>
                        {endIcon}
                    </div>
                )
            )}
        </InputIcon>
    )
}

const InputIcon = styled.div`
    position      : relative;
    width         : 100%;
    max-width     : 600px;
    height        : 44px;
    color         : var(--input-text);
    background    : var(--content);
    border-radius : var(--rounded-lg);

    input {
        display       : block;
        width         : 100%;
        height        : 100%;
        padding       : 4px 12px 4px 20px;
        border-radius : var(--rounded-lg);
        outline       : none;
        background    : transparent;
        z-index       : 1;
        border        : none;
        color         : var(--input-text);
        transition    : .3s var(--easing);

        &:focus {
            transition : .3s var(--easing);
            background : var(--body);
            box-shadow : var(--shadow-tiny);
            + label {
                transform  : scale(0.75);
                top        : 4px;
                transition : 0.2s ease;
                padding    : 0 0 0 64px;
            }
        }

        &::placeholder {
            color : var(--placeholder);
        }
    }

    label {
        position         : absolute;
        top              : 15px;
        color            : var(--placeholder);
        padding          : 0 0 0 50px;
        transform        : scale(1);
        transform-origin : 0;
        transition       : 0.2s ease;
        z-index          : 0;
    }

    &.is_start_icon {
        input {
            padding : 6px 12px 6px 46px;
        }
    }
    &.is_end_icon {
        input {
            padding : 6px 46px 6px 20px;
        }
    }

    .start_icon {
        height           : 100%;
        position         : absolute;
        bottom           : 0;
        display          : flex;
        align-items      : center;
        padding          : 0 0 0 13px;
        transform        : scale(1);
        transform-origin : 0;

        svg {
            height : 20px;
            width  : 20px;
            color  : var(--placeholder);
        }
    }

    .end_icon {
        position  : absolute;
        right     : 15px;
        top       : 50%;
        transform : translateY(-50%);
        z-index   : 2;
        cursor    : pointer;

        svg {
            height : 20px;
            width  : 20px;
        }
    }

    .svg_container {
        position      : absolute;
        bottom        : 8px;
        right         : 10px;
        padding       : 5px;
        border-radius : 20px;
        cursor        : pointer;
        z-index       : 700;

        svg {
            height   : 16px;
            width    : 16px;
        }

        &:hover {
            background : var(--content-light);
        }
    }
`

/**
 * 
 */

export const ClassicInput = (props) => {
    const { useRef, value, defaultValue, className, cross, onClean } = props
    return (
        <InputClassic className={`${className ? 'classic-input ' + className : 'classic-input'}`}>
            <input
                ref={useRef}
                {...inputProps(props)}
            />
            {cross &&
                ((value || defaultValue) &&
                    (value?.length > 0 || defaultValue?.length > 0)) && (
                    <div onClick={onClean} className="svg_container">
                        <Icon name="Cross" className="cross" />
                    </div>
                )}
        </InputClassic>
    )
}

const InputClassic = styled.div`
    position    : relative;
    display     : flex;
    align-items : center;
    width       : 100%;
    z-index     : 10;
    overflow    : hidden;

    input {
        display        : block;
        width          : 100%;
        height         : 44px;
        padding        : 10px 40px 10px 15px;
        color          : var(--text);
        background     : transparent;
        border-radius  : var(--rounded-lg);
        outline        : none;
        letter-spacing : .00625em;
        font-size      : 1rem;
        font-weight    : 500;
        line-height    : 1.5rem;
        z-index        : 10;

        &::placeholder {
            letter-spacing : .00625em;
            font-size      : 1rem;
            font-weight    : 400;
            line-height    : 1.5rem;
            color          : var(--placeholder);
        }
    }

    .svg_container {
        position      : absolute;
        top           : 50%;
        transform     : translateY(-50%);
        right         : 10px;
        padding       : 5px;
        border-radius : 20px;
        cursor        : pointer;
        z-index       : 700;

        svg {
            height   : 20px;
            width    : 20px;
        }

        &:hover {
            background : var(--content-light);
        }
    }

    &.succes {
        input {
            background : rgba(var(--green-rgb), 0.07);
        }
    }
    &.err {
        input {
            background : rgba(var(--red-rgb), 0.1);
        }
    }
`

/**
 * 
 */

export const Textarea = (props) => {
    const { className, onChange } = props
    const textareaRef = React.useRef()

    const expandHeight = (e) => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        if (e.target.value.length === 0) {
            textareaRef.current.style.removeProperty("height");
        }
    }

    return (
        <TextareaInput
            className={`${className ? "textarea " + className : "textarea"}`}
            {...inputProps(props)}
            ref={textareaRef}
            onClick={e => expandHeight(e)}
            onChange={(e) => {
                onChange(e)
                expandHeight(e)
            }}
        />
    )
}

const TextareaInput = styled.textarea`
    display        : block;
    width          : 100%;
    height         : 44px;
    max-height     : 300px;
    padding        : 10px 15px;
    color          : var(--text);
    background     : transparent;
    border-radius  : var(--rounded-lg);
    outline        : none;
    letter-spacing : .00625em;
    font-size      : 1rem;
    font-weight    : 400;
    line-height    : 1.5rem;
    resize         : none;
    z-index        : 10;

    &:focus-visible {
        outline : none;
    }

    &::placeholder {
        color : var(--placeholder);
    }

    &::-webkit-scrollbar {
        width : 10px;
    }
    &::-webkit-scrollbar-track {
        background : transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color : var(--light-border);
        border           : 3px solid var(--content-light);
        border-radius    : 10px;
    }

    &::-webkit-scrollbar-corner {
        background : transparent;
    }

    &.succes {
        background : rgba(var(--green-rgb), 0.07);
    }
    &.err {
        background : rgba(var(--red-rgb), 0.1);
    }
`