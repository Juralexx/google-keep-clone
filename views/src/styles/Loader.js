import { css } from "styled-components";

export const Loaders = css`
    @keyframes wave-lines {
        0% {
            background-position : -468px 0;
        }
        100% {
            background-position : 468px 0;
        }
    }

    .loading-skeleton {
        background      : -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(203, 203, 203, 0.6)), color-stop(18%, rgba(203, 203, 203, 0.9)), color-stop(33%, rgba(203, 203, 203, 0.6)));
        background      : linear-gradient(to right, rgba(203, 203, 203, 0.6) 8%, rgba(203, 203, 203, 0.9) 18%, rgba(203, 203, 203, 0.6) 33%);
        background-size : 800px 100px;
        animation       : wave-lines 2s infinite ease-out;
    }

    .dark {
        .loading-skeleton {
            background      : -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(255, 255, 255, 0.2)), color-stop(18%, rgba(255, 255, 255, 0.25)), color-stop(33%, rgba(255, 255, 255, 0.2)));
            background      : linear-gradient(to right, rgba(255, 255, 255, 0.2) 8%, rgba(255, 255, 255, 0.25) 18%, rgba(255, 255, 255, 0.2) 33%);
            background-size : 800px 100px;
            animation       : wave-lines 2s infinite ease-out;
        }
    }

    @keyframes skeleton {
    0% {
            opacity   : .4;
            transform : translateY(10px) scale(0.98);
    }
    80% {
            opacity   : 1;
            transform : translateY(0px) scale(1);
    }
    100% {
            opacity   : 1;
            transform : translateY(0px) scale(1);
    }
    }

    .loading-animated-skeleton {
        background                : -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(203, 203, 203, 0.6)), color-stop(18%, rgba(203, 203, 203, 0.9)), color-stop(33%, rgba(203, 203, 203, 0.6)));
        background                : linear-gradient(to right, rgba(203, 203, 203, 0.6) 8%, rgba(203, 203, 203, 0.9) 18%, rgba(203, 203, 203, 0.6) 33%);
        background-size           : 800px 100px;
        animation-name            : wave-lines, skeleton;
        animation-iteration-count : infinite;
        animation-duration        : 2s;
        animation-fill-mode       : forwards;
        animation-timing-function : ease-in-out;
        animation-direction       : alternate;

        &.animation-delay-200 {
            animation-delay : 200ms;
        }
        &.animation-delay-400 {
            animation-delay : 400ms;
        }
        &.animation-delay-600 {
            animation-delay : 600ms;
        }
        &.animation-delay-800 {
            animation-delay : 800ms;
        }
    }

    .dark {
        .loading {
            background                : -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(255, 255, 255, 0.2)), color-stop(18%, rgba(255, 255, 255, 0.25)), color-stop(33%, rgba(255, 255, 255, 0.2)));
            background                : linear-gradient(to right, rgba(255, 255, 255, 0.2) 8%, rgba(255, 255, 255, 0.25) 18%, rgba(255, 255, 255, 0.2) 33%);
            background-size           : 800px 100px;
            animation-name            : wave-lines, skeleton;
            animation-iteration-count : infinite;
            animation-duration        : 2s;
            animation-fill-mode       : forwards;
            animation-timing-function : ease-in-out;
            animation-direction       : alternate;
        }
    }

    /* circle */

    .loading-circle-36 {
        width         : 36px;
        min-width     : 36px;
        height        : 36px;
        min-height    : 36px;
        border-radius : 50%;
        margin-right  : 10px;
    }

    .loading-circle-38 {
        width         : 38px;
        min-height    : 38px;
        height        : 38px;
        min-height    : 38px;
        border-radius : 50%;
        margin-right  : 10px;
    }

    /* height 12 */

    .loading-h12-w30 {
        height        : 12px;
        width         : 30px;
        border-radius : 30px;
    }

    .loading-h12-w60 {
        height        : 12px;
        width         : 60px;
        border-radius : 30px;
    }

    .loading-h12-w80 {
        height        : 12px;
        width         : 80px;
        border-radius : 30px;
    }

    .loading-h12-w100 {
        height        : 12px;
        width         : 100px;
        border-radius : 30px;
    }

    .loading-h12-w120 {
        height        : 12px;
        width         : 130px;
        border-radius : 30px;
    }

    .loading-h12-w140 {
        height        : 12px;
        width         : 140px;
        border-radius : 30px;
    }

    .loading-h12-w160 {
        height        : 12px;
        width         : 160px;
        border-radius : 30px;
    }

    .loading-h12-w180 {
        height        : 12px;
        width         : 180px;
        border-radius : 30px;
    }

    /* height 14 */

    .loading-h14-w40 {
        height        : 14px;
        width         : 40px;
        border-radius : 30px;
    }

    .loading-h14-w50 {
        height        : 14px;
        width         : 50px;
        border-radius : 30px;
    }

    .loading-h14-w60 {
        height        : 14px;
        width         : 60px;
        border-radius : 30px;
    }

    .loading-h14-w80 {
        height        : 14px;
        width         : 80px;
        border-radius : 30px;
    }

    .loading-h14-w100 {
        height        : 14px;
        width         : 100px;
        border-radius : 30px;
    }

    .loading-h14-w120 {
        height        : 14px;
        width         : 130px;
        border-radius : 30px;
    }

    .loading-h14-w140 {
        height        : 14px;
        width         : 140px;
        border-radius : 30px;
    }

    .loading-h14-w160 {
        height        : 14px;
        width         : 160px;
        border-radius : 30px;
    }

    .loading-h14-w180 {
        height        : 14px;
        width         : 180px;
        border-radius : 30px;
    }

    .loading-h14-w200 {
        height        : 14px;
        width         : 200px;
        border-radius : 30px;
    }

    .loading-h14-w220 {
        height        : 14px;
        width         : 220px;
        border-radius : 30px;
    }

    .loading-h14-w300 {
        height        : 14px;
        width         : 300px;
        border-radius : 30px;
    }

    /* height 20 */

    .loading-h20-wfull {
        height        : 30px;
        width         : 100%;
        border-radius : 10px;
    }

    .loading-h20-w300 {
        height        : 30px;
        width         : 300px;
        border-radius : 10px;
    }

    .loading-h20-w400 {
        height        : 30px;
        width         : 400px;
        border-radius : 10px;
    }

    .loading-h20-w200 {
        height        : 30px;
        width         : 200px;
        border-radius : 10px;
    }

    /* height 40 */

    .loading-h40-wfull {
        height        : 40px;
        width         : 100%;
        border-radius : 10px;
    }

    .loading-h40-w350 {
        height        : 40px;
        width         : 350px;
        border-radius : 10px;
    }

    .loading-h40-w200 {
        height        : 40px;
        width         : 200px;
        border-radius : 10px;
    }
`