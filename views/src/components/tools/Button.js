import styled from "styled-components";

const buttonProps = (props) => {
    return ({
        type: props.type,
        style: props.style,
        onClick: props.onClick,
        onKeyDown: props.onKeyDown,
        disabled: props.disabled,
    })
}

export const Button = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn btn_first " + className : "btn btn_first"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

export const TextButton = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn text_btn " + className : "btn text_btn"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

const Btn = styled.button`
    position        : relative;
    height          : 36px;
    min-width       : 120px;
    display         : flex;
    align-items     : center;
    justify-content : center;
    padding         : 0 20px;
    font-size       : 14px;
    text-align      : center;
    text-decoration : none;
    text-transform  : none;
    border          : none;
    outline         : none;
    cursor          : pointer;
    white-space     : nowrap;
    overflow        : hidden;
    transform       : scale(1);

    &:disabled {
        opacity : 0.5;

        &:hover {
            background : var(--primary);
        }
    }

    &:active {
        transform  : scale(0.95);
    }

    &.delete {
        background-color:  rgba(var(--red-rgb), 0.9);
        &:hover {
            background-color: var(--red);
        }
    }

    &.validate {
        background-color:  rgba(var(--green-rgb), 0.9);
        &:hover {
            background-color: var(--green);
        }
    }

    &.btn_icon_start {
        svg {
            height       : 18px;
            width        : 18px;
            margin-right : 8px;
        }
    }
    &.btn_icon_end {
        svg {
            height      : 18px;
            width       : 18px;
            margin-left : 8px;
        }
    }

    a {
        display         : flex;
        align-items     : center;
        justify-content : center;
        left            : 0;
        top             : 0;
        width           : 100%;
        height          : 100%;
        color           : white;
    }

    &.btn_first {
        color         : white;
        background    : var(--primary);
        border-radius : var(--rounded-sm);
        box-shadow    : var(--shadow-tiny);

        svg {
            height : 18px;
            width  : 18px;
            color  : white;
        }

        &:hover {
            background : var(--primary-dark);
        }
    }

    &.text_btn {
        color         : var(--primary);
        border-radius : var(--rounded-sm);
        box-shadow    : none;
        background    : rgba(var(--primary-rgb), 0.15);

        &:hover {
            background : rgba(var(--primary-rgb), 0.22);
        }
        a {
            color      : var(--primary);
            background : none;
            padding    : 0;
            height     : unset;
        }
        svg {
            color : var(--primary);
        }
    }
`